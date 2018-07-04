import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, TouchableOpacity,Button
} from 'react-native';

import { StackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MainScreen from "./MainScreen";
import App from  "./App";
import gmapsDirections from "./gmapsDirections.js";
const stackNav = StackNavigator({
    Main : {
        screen: MainScreen,
        navigationOptions: ({navigation}) => ({
            title: "Main",
            headerLeft:(<TouchableOpacity onPress={() => this.navigation.navigate.openDrawer()}>
                    <IOSIcon name="ios-menu" size={30} />
                </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 15 }
        })
    },
    MyApp: {
        screen: App,
        navigationOptions: ({navigation}) => ({
            title: "Detail",
        })
    },
    MyAPI: {
        screen: gmapsDirections,
        navigationOptions: ({navigation}) => ({
            title: "gmapsDirections",
        })
    }
});

export default stackNav;