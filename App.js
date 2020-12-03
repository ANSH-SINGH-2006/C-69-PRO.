import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/BookTransactionScreen'

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  
  render(){
    
    return (
    <AppContainer/>
    )
  
  }
  
}

const TabNavigator=createBottomTabNavigator({
  Transaction:{screen: TransactionScreen},
  
})

const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
