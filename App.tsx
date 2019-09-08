import React from 'react';
import {StyleSheet, View} from 'react-native';
import MemoListScreen from './src/screens/TodoListScreen';
import AppBar from './src/components/AppBar';


export default function App() {
    return (
        <View style={styles.container}>
            <AppBar/>
            <MemoListScreen/>
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
