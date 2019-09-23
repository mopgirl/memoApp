import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton, { ICON_COLOR, ICON_NAME } from '../elements/CircleButton';
import Utils from '../utils/utils';


class MemoDetailScreen extends React.Component {
    state = {
        memo : {},
    };

    componentWillMount(): void {
        const {params} = this.props.navigation.state;
        this.setState({memo : params.memo});
    }

    dateString(createdOn): string {
        return Utils.dateString(createdOn);
    }

    render() {
        const {memo} = this.state;
        return (
            <View style={ styles.container }>
                <View style={ styles.memoHeader }>
                    <View>
                        <Text style={ styles.memoHeaderTitle }>{ memo.body.substr(0, 10) }</Text>
                        <Text style={ styles.memoHeaderDate }>{ this.dateString(memo.createdOn) }</Text>
                    </View>
                </View>

                <View style={ styles.memoContent }>
                    <Text style={ styles.memoBody }>{ memo.body }</Text>
                </View>
                <CircleButton icon={ ICON_NAME.pencil } fontSize={ 30 } color={ ICON_COLOR.pink }
                              style={ styles.editButton } onPress={ () => {
                    this.props.navigation.navigate('MemoEdit', {memo});
                } }></CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : '100%',
    },
    memoHeader : {
        height : 100,
        backgroundColor : '#17313C',
        justifyContent : 'center',
        padding : 10,

    },

    memoHeaderTitle : {
        color : '#fff',
        fontSize : 24,
        fontWeight : 'bold',
    },
    memoHeaderDate : {
        fontSize : 12,
        color : '#fff',
    },
    memoBody : {
        lineHeight : 22,
        fontSize : 15,
    },
    memoContent : {
        paddingTop : 30,
        paddingLeft : 20,
        paddingRight : 20,
        paddingBottom : 20,
        backgroundColor : '#ddd',
        flex : 1,
    },
    editButton : {
        top : 75,

    },
});

export default MemoDetailScreen;
