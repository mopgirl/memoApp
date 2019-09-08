import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MemoList from './src/components/MemoList';
import AppBar from './src/components/AppBar';
import CircleButton from './src/elements/CircleButton';


export default function App() {
    return (
        <View style={styles.container}>
            <AppBar/>
            <MemoList/>
            <CircleButton/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDF6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 78,

    },

});
