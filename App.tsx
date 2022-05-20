import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './src/navigation/Main'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})