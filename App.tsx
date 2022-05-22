import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './src/navigation/Main'
import { NavigationContainer } from '@react-navigation/native'
import AppContext from './src/Context/AppContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <AppContext>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </AppContext>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})