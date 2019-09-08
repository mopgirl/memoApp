import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.memoHeader }>
                    <View>
                        <Text style={ styles.memoHeaderTitle }>講座のアイディア</Text>
                        <Text style={ styles.memoHeaderDate }>2019/01/01</Text>
                    </View>
                </View>

                <View style={ styles.memoContent }>
                    <Text >講座のアイディアです</Text>
                </View>
                <CircleButton color={"white"} style={styles.editButton}>+</CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height: 100,
        backgroundColor: '#17313C',
        justifyContent: 'center',
        padding:10,

    },

    memoHeaderTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff',
    },
    memoContent: {
        paddingTop:30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom:20,
        backgroundColor: '#ddd',
        flex:1,
    },
    editButton:{
        top:75,

    }
});

export default MemoDetailScreen;
