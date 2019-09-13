import React from 'react';
import { StyleSheet, View, TextInput, Button, TouchableHighlight, Text } from 'react-native';
import firebase from "firebase";

class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }

    private handleSubmit(text: string) {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log('success', user);
                this.props.navigation.navigate('MemoList');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`errorCode￿￿ ${ errorCode }, errorMessage: ${ errorMessage }`);
            });
    }

    render() {
        return (
            <View style={ styles.container }>
                <TextInput style={ styles.input } value={ this.state.email } placeholder={ 'E-mail' }
                           onChangeText={ (text) => this.setState({email: text}) }
                           autoCapitalize={ false } autoCorrect={ false }/>
                <TextInput style={ styles.input } value={ this.state.password } placeholder={ 'Password' }
                           onChangeText={ (text) => this.setState({password: text}) }
                           autoCapitalize={ false } autoCorrect={ false } secureTextEntry/>

                <TouchableHighlight style={ styles.button } onPress={
                    this.handleSubmit.bind(this) }>
                    <Text style={ styles.title }>ログイン</Text>
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
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        alignSelf: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 18,
    }
});

export default LoginScreen;
