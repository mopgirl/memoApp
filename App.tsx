import React from 'react';
import MemoListScreen from './src/screens/TodoListScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

const App = createStackNavigator({
    Home: {
        screen: MemoListScreen,
    },
    MemoDetailScreen: {
        screen: MemoDetailScreen,
    },
    MemoEditScreen: {
        screen: MemoEditScreen,
    },
    LoginScreen: {
        screen: LoginScreen,
    },
    SignupScreen: {
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
    }
});
export default createAppContainer(App);

