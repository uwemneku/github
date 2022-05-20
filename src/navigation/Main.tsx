import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileScreen, RepositoryScreen } from '../screens'
import { HomeParams } from '../types'

const { Navigator, Screen } = createStackNavigator<HomeParams>()

const Main = () => {
    return (
        <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
            <Screen name='Home' component={ProfileScreen} />
            <Screen name='Profile' component={RepositoryScreen} />
        </Navigator>
    )
}

export default Main

const styles = StyleSheet.create({})