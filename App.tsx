import React from 'react';
import MemoListScreen from './src/screens/TodoListScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import * as firebase from 'firebase';
import ENV from './env.json';
const firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);
const config = {
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.FIREBASE_DB_URL,
    projectId: ENV.FIREBASE_PRJ_ID,
    storageBucket: ENV.FIREBASE_STORAGE,
    messagingSenderId: ENV.FIREBASE_SENDER
};
const APP = createStackNavigator({

    Login: {
        screen: LoginScreen,
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
    Signup: {
        screen: SignupScreen,
    },
}, {
    defaultNavigationOptions: {
        title: 'Memo',
        headerStyle: {
            backgroundColor: '#265366',
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerTintColor:'#fff',
        headerBackTitle:null,
    },
});
export default createAppContainer(APP);

