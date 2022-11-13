import React from 'react';
import MemoListScreen from './src/screens/TodoListScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import { Clipboard } from 'react-native';

if (__DEV__) {
  Clipboard.setString('');
}
const APP = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    MemoCreate: {
      screen: MemoCreateScreen,
    },
    SignUp: {
      screen: SignupScreen,
    },
    MemoList: {
      screen: MemoListScreen,
    },
    MemoDetail: {
      screen: MemoDetailScreen,
    },
    MemoEdit: {
      screen: MemoEditScreen,
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Memo',
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: '#fff',
      headerBackTitle: undefined,
    },
  },
);
export default createAppContainer(APP);
