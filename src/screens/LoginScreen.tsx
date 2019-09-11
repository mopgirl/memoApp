import React from 'react';
import { StyleSheet, View, TextInput, Button, TouchableHighlight, Text } from 'react-native';

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <TextInput style={ styles.input } value={ 'E-Mail Address' }/>
                <TextInput style={ styles.input } value={ 'PassWord' }/>

                <TouchableHighlight style={ styles.button } onPress={ () => {this.props.navigation.navigate('MemoList');} }>
                        <Text style={styles.title}>ログイン</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        paddingTop: 80,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: "#ddd",
        height: 48,
        marginBottom: 16,
        paddingLeft: 16,
        borderWidth: 1,
        borderColor: '#DDD',
    },
    button: {
        backgroundColor: '#E31676',
        height: 48,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        width:140,
        alignSelf:'center',
    },
    title:{
        color:'#fff',
        fontSize:18,
    }
});

export default LoginScreen;
