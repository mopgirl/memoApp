import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from 'react-native';
import firebase from '../../firebase';
import { NavigationActions, StackActions } from 'react-navigation';
import * as SecureStore from 'expo-secure-store';
import Loading from '../elements/Loading';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
  };

  private handlePress() {
    this.props.navigation.navigate('SignUp');
  }

  async componentDidMount() {
    const email = await SecureStore.getItemAsync('email');
    const password = await SecureStore.getItemAsync('password');
    if (email && password) {
      this.setLoadingFlag(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setLoadingFlag(false);
          this.navigateToHome();
        });
    }
  }

  private setLoadingFlag(isLoading: boolean) {
    this.setState({ isLoading });
  }

  private handleSubmit(text: string) {
    this.setLoadingFlag(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        this.setLoadingFlag(false);
        SecureStore.setItemAsync('email', this.state.email);
        SecureStore.setItemAsync('password', this.state.password);
        console.log('success');
        this.navigateToHome();
      })
      .catch(error => {
        this.setLoadingFlag(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`errorCode￿￿ ${errorCode}, errorMessage: ${errorMessage}`);
      });
  }

  private navigateToHome() {
    const resetActions = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'MemoList' })],
    });
    this.props.navigation.dispatch(resetActions);
  }

  render() {
    return (
      <View style={styles.container}>
        <Loading
          text="Now Loading ..."
          isLoading={this.state.isLoading}
        ></Loading>
        <TextInput
          style={styles.input}
          value={this.state.email}
          placeholder={'E-mail'}
          onChangeText={text => this.setState({ email: text })}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          placeholder={'Password'}
          onChangeText={text => this.setState({ password: text })}
          autoCapitalize={'none'}
          autoCorrect={false}
          secureTextEntry
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.title}>ログイン</Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.signup}
          onPress={this.handlePress.bind(this)}
        >
          <Text style={styles.signuptext}>メンバー登録する</Text>
        </TouchableOpacity>
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
    backgroundColor: '#ddd',
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
  },
  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signuptext: {
    fontSize: 16,
  },
});

export default LoginScreen;
