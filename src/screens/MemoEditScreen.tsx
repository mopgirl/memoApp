import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton, { ICON_COLOR, ICON_NAME } from '../elements/CircleButton';
import firebase from 'firebase';

class MemoEditScreen extends React.Component {
    state = {
        body : '',
        key : '',
    };

    private handlePress() {
        const {currentUser} = firebase.auth();
        const db = firebase.firestore();
        db.collection(`users/${ currentUser.uid }/memos`)
            .doc(this.state.key)
            .update({body : this.state.body})
            .then(() => {
                console.log('success');
            })
            .catch((error) => {
                console.log(error);
            });

    }

    componentWillMount(): void {
        const params = this.props.navigation.state.params;
        this.setState({body : params.memo.body, key : params.memo.key});
    }


    render() {
        return (
            <View style={ styles.container }>
                <TextInput style={ styles.memoEditInput } multiline={ true }
                           value={ this.state.body }
                           onChangeText={ (text) => this.setState({body : text}) }/>

                <CircleButton icon={ ICON_NAME.check }
                              fontSize={ 20 }
                              color={ ICON_COLOR.white }
                              style={ styles.icon }
                              onPress={ this.handlePress.bind(this) }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : '100%',
    },
    memoEditInput : {
        backgroundColor : '#ddd',
        flex : 1,
        paddingTop : 32,
        paddingLeft : 16,
        paddingRight : 16,
        paddingBottom : 16,
        fontSize : 16,
    },
    icon : {},
});

export default MemoEditScreen;
