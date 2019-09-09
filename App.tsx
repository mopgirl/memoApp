import React from 'react';
import {StyleSheet, View} from 'react-native';
import MemoListScreen from './src/screens/TodoListScreen';
import AppBar from './src/components/AppBar';
import MemoDetailScreen from "./src/screens/MemoDetailScreen";


export default function App() {
    return (
        <View style={styles.container}>
            <AppBar/>
            <MemoDetailScreen/>

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
