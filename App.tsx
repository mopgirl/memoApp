import React from 'react';
import MemoListScreen from './src/screens/TodoListScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

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
    }
});
export default createAppContainer(APP);

