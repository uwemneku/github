import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    CardStyleInterpolators,
    createStackNavigator,
} from "@react-navigation/stack";
import { ProfileScreen, RepositoryScreen, StarredScreen } from "../screens";
import { homeNav, HomeParams, repoType } from "../types";
import Octicons from "@expo/vector-icons/Octicons";
import { FlexContainer, StyledText } from "../components";
import Divider from "../components/Divider";
import styled from "styled-components/native";

const { Navigator, Screen } = createStackNavigator<HomeParams>();

const Main = () => {
    return (
        <Navigator
            initialRouteName="Profile"
            screenOptions={{
                cardStyleInterpolator:
                    CardStyleInterpolators.forRevealFromBottomAndroid,
            }}
        >
            <Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <Screen
                name="Repository"
                component={RepositoryScreen}
                options={{
                    header: ({ route, navigation }) => (
                        <Header style={{ padding: 20, backgroundColor: "white" }}>
                            <Octicons
                                name="arrow-left"
                                size={30}
                                color="rgba(0, 0, 0, 0.8)"
                                onPress={() => navigation.goBack()}
                            />
                            <Divider direction="horizontal" />
                            <View>
                                {/* Due  to the structure of the app, username and type property will always be available before users navigate to this screen*/}
                                <StyledText weight="300">{route.params?.username}</StyledText>
                                <StyledText weight="bold" size={20}>
                                    {getHeadingText(route.params?.type)}
                                </StyledText>
                            </View>
                        </Header>
                    ),
                }}
            />
        </Navigator>
    );
};

const getHeadingText = (routeName: repoType) => {
    switch (routeName) {
        case "repos":
            return homeNav.Repositories;
        case "starred":
            return homeNav.Starred;
        case "orgs":
            return homeNav.Organizations;
    }
};

const Header = styled(FlexContainer)`
  padding: 10px 20px;
  background-color: white;
  border-bottom-width: 0.3px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export default Main;

const styles = StyleSheet.create({});
