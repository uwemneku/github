import { ActivityIndicator, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { NavList, StyledText } from "../../components";
import { getNumberOfStaredRepo, getUser, } from "../../services/api";
import { homeNav, HomeParams, StackScreenProps, User } from "../../types";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { homeListData } from "../../constants";
import { PinnedRepositories, ProfileDetails } from "./components";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

const Profile = ({ navigation }: StackScreenProps<HomeParams, 'Profile'>) => {
    const [userData, setUserData] = useState<User | null>(null)
    const [numberOfStarredRepo, setNumberOfStarredRepo] = useState<number>(0)

    const getCount = useCallback((name: keyof typeof homeNav) => {
        switch (name) {
            case 'Repositories':
                return userData?.public_repos ?? 0;
            case 'Organizations':
                return 0;
            case 'Starred':
                return numberOfStarredRepo;
        }
    }, [userData, numberOfStarredRepo]);

    useEffect(() => {
        const fetchData = async () => {
            const user = await getUser()
            const s = await getNumberOfStaredRepo()
            setNumberOfStarredRepo(s)
            setUserData(user)
        }
        fetchData()
    }, [])


    return (
        <>
            {userData ? (
                <ScrollView>
                    <View>
                        <Icon name="settings-helper" size={40} />
                        <Icon name="settings-helper" size={40} />
                    </View>

                    <ProfileDetails {...userData} />
                    <PinnedRepositories />
                    <View>
                        {homeListData.map(({ label, color, params }) => (
                            <NavList
                                key={label}
                                count={getCount(label)}
                                icon={{ color, name: "hello" }}
                                onPress={() => navigation.navigate(params)}
                                {...{ label }}
                            />
                        ))}
                    </View>
                </ScrollView>
            ) :
                <EmptyView >
                    <ActivityIndicator size={200} color='blue' />
                    <StyledText >Fetching user data</StyledText>
                </EmptyView>
            }
        </>
    );
};

const EmptyView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    `;

export default Profile;
