import React from 'react';
import { StyleSheet, View, TextInput } from "react-native";
import CircleButton, { ICON_COLOR, ICON_NAME } from "../elements/CircleButton";

class MemoEditScreen extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <TextInput style={ styles.memoEditInput } multiline={ true } value={ "hi" }/>

                <CircleButton icon={ ICON_NAME.check } fontSize={ 20 } color={ ICON_COLOR.white }
                              style={ styles.icon }></CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoEditInput: {
        backgroundColor: '#ddd',
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
    },
    icon: {},
});

export default MemoEditScreen;
