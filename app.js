import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';




import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);


export default class App extends React.Component {

    render() {
        return <AppNavigator/>;
    }
}

const AppSwitchNavigator = createSwitchNavigator({

        LoadingScreen: LoadingScreen,
        LoginScreen: LoginScreen,
        DashboardScreen: DashboardScreen
});


const AppNavigator = createAppContainer(AppSwitchNavigator);



const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

registerRootComponent(App);
