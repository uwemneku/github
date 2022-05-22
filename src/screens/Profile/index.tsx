import { View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
    LoadingView,
    NavList,
} from "../../components";
import {
    fetchDataRecursively,
    getNumberOfStaredRepo,
    getUser,
} from "../../services/api";
import {
    homeNav,
    HomeParams,
    Repository,
    StackScreenProps,
    User,
} from "../../types";
import { homeListData } from "../../constants";
import { PinnedRepositories, ProfileDetails } from "./components";
import { ScrollView } from "react-native-gesture-handler";
import Divider from "../../components/Divider";

const Profile = ({ navigation }: StackScreenProps<HomeParams, "Profile">) => {
    const [data, setData] = useState<{
        userData: User;
        numberOfStarredRepo: number;
        mockPinnedRepo: Repository[];
    } | null>(null);

    const getCount = useCallback(
        (name: keyof typeof homeNav) => {
            switch (name) {
                case "Repositories":
                    return data?.userData.public_repos ?? 0;
                case "Organizations":
                    return 0;
                case "Starred":
                    return data?.numberOfStarredRepo ?? 0;
            }
        },
        [data]
    );

    useEffect(() => {
        const fetchData = async () => {
            const [user, count, repos] = await Promise.all([
                getUser(),
                getNumberOfStaredRepo(),
                fetchDataRecursively("repos?per_page=5").next(),
            ]);
            setData({
                userData: user,
                numberOfStarredRepo: count,
                mockPinnedRepo: repos.value || [],
            });
        };
        fetchData();
    }, []);

    return (
        <>
            {data ? (
                <ScrollView>
                    <ProfileDetails {...data.userData} />
                    <Divider />
                    <PinnedRepositories data={data.mockPinnedRepo} />
                    <View>
                        {homeListData.map(({ label, color, params, name }) => (
                            <NavList
                                key={label}
                                count={getCount(label)}
                                icon={{ color, name }}
                                onPress={() =>
                                    navigation.navigate("Repository", {
                                        type: params,
                                        username: data.userData.login,
                                    })
                                }
                                {...{ label }}
                            />
                        ))}
                    </View>
                </ScrollView>
            ) : (
                <LoadingView text="Fetching user data" />
            )}
        </>
    );
};

export default Profile;
