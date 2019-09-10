import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';
import MemoList from '../components/MemoList';
import AppBar from '../components/AppBar';


class MemoListScreen extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <MemoList/>
                <CircleButton icon={ "plus" } color={ "white" } fontSize={ "25" }></CircleButton>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
});

export default MemoListScreen;
