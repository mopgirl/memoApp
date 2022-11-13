import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Text,
} from 'react-native';
import firebase from '../../firebase';
import { NavigationActions, StackActions } from 'react-navigation';
import MemoList from '../components/MemoList';

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  private handleSublit() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log('success!', user);
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'MemoList' })],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`errorCode￿￿ ${errorCode}, errorMessage: ${errorMessage}`);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={text => {
            this.setState({ email: text });
          }}
          autoCapitalize={false}
          autoCorrect={false}
          placeholder={'E-mail'}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={text => {
            this.setState({ password: text });
          }}
          autoCapitalize={false}
          autoCorrect={false}
          placeholder={'Password'}
          secureTextEntry
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSublit.bind(this)}
          underlayColor={'#C70F66'}
        >
          <Text style={styles.title}>登録する</Text>
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
});

export default SignupScreen;
