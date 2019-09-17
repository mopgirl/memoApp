import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';
import MemoList from '../components/MemoList';
import firebase from 'firebase';

class MemoListScreen extends React.Component {
    state = {
        memoList : [],
    };

    componentWillMount(): void {
        const {currentUser} = firebase.auth();
        const dbPath = `users/${ currentUser.uid }/memos`;
        firebase.firestore().collection(dbPath).get()
            .then((snapshot) => {
                const memoList = [];
                snapshot.forEach((doc) => {
                    memoList.push(doc.data());
                });
                this.setState({ memoList });
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
    };

    private handlePress() {
        this.props.navigation.navigate('MemoCreate');
    }

    render() {
        return (
            <View style={ styles.container }>
                <MemoList memoList={ this.state.memoList } navigation={ this.props.navigation }/>
                <CircleButton
                    icon={ 'plus' }
                    color={ 'white' }
                    fontSize={ 25 }
                    onPress={ this.handlePress.bind(this) }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : '100%'
    }
});

export default MemoListScreen;
