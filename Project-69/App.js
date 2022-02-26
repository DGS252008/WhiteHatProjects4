import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scan from './screens/scanScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Scan: {screen:Scan},
})

const AppContainer = createAppContainer(TabNavigator)
