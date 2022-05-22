import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileScreen, RepositoryScreen, StarredScreen } from '../screens'
import { HomeParams } from '../types'

const { Navigator, Screen } = createStackNavigator<HomeParams>()

const Main = () => {
    return (
        <Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }} >
            <Screen name='Profile' component={ProfileScreen} />
            <Screen name='Repository' component={RepositoryScreen} />
        </Navigator>
    )
}

export default Main

const styles = StyleSheet.create({})