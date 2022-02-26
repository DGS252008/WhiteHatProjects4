import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FB from './screens/fb'
import INSTA from './screens/insta'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return (
        <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  FB: {screen:FB},
  INSTA: {screen:INSTA}
})

const AppContainer = createAppContainer(TabNavigator)