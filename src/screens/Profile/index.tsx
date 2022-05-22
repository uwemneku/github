import { View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FlexContainer, LoadingView, NavList, StyledText } from "../../components";
import { getNumberOfStaredRepo, getUser, } from "../../services/api";
import { homeNav, HomeParams, StackScreenProps, User } from "../../types";
import { homeListData } from "../../constants";
import { FollowButton, PinnedRepositories, ProfileDetails } from "./components";
import { ScrollView } from "react-native-gesture-handler";
import Divider from "../../components/Divider";


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
            const count = await getNumberOfStaredRepo()
            setNumberOfStarredRepo(count)
            setUserData(user)
            console.log(user);

        }
        fetchData()
    }, [])


    return (
        <>
            {userData ? (
                <ScrollView>
                    <ProfileDetails {...userData} />
                    <Divider />
                    <PinnedRepositories />
                    <View >
                        {homeListData.map(({ label, color, params, name }) => (
                            <NavList
                                key={label}
                                count={getCount(label)}
                                icon={{ color, name }}
                                onPress={() => navigation.navigate('Repository', params)}
                                {...{ label }}
                            />
                        ))}
                    </View>
                </ScrollView>
            ) :
                <LoadingView text="Fetching user data" />
            }
        </>
    );
};



export default Profile;
