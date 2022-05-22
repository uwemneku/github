import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './src/navigation/Main'
import { NavigationContainer } from '@react-navigation/native'
import AppContext from './src/Context/AppContext'

const App = () => {
  return (
    <AppContext>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </AppContext>
  )
}

export default App

const styles = StyleSheet.create({})