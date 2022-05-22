import { FlatList } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { HomeParams, Repository, StackScreenProps } from "../types";
import { ErrorScreenWrapper, LoadingView, RepoSummary } from "../components";
import { fetchDataRecursively } from "../services/api";
import styled from "styled-components/native";
import { useIsFocused } from "@react-navigation/native";
import { SPACES } from "../constants";

// This screen renders a list of repositories.
const { medium } = SPACES
const Index = ({ route }: StackScreenProps<HomeParams, "Repository">) => {
    const [repos, setRepos] = useState<Repository[] | null>(null);
    const [errorFetchingData, setErrorFetchingData] = useState(false);
    const [isFetchingMoreData, setIsFetchingMoreData] = useState(false);

    const isScreenFocused = useIsFocused();
    const repoType = route.params.type;
    const showRepoHeader = repoType !== "repos";
    const getData = useMemo(() => fetchDataRecursively(repoType), []);

    const fetchData = useCallback(async () => {
        try {
            errorFetchingData && setErrorFetchingData(false);
            if (isFetchingMoreData) return;
            setIsFetchingMoreData(true);
            const data = (await getData.next());
            if (data.value && isScreenFocused) {
                repos ? setRepos([...repos, ...data.value]) : setRepos(data.value);
            } else {
                !data.done && setErrorFetchingData(true)
            }
            setIsFetchingMoreData(false);
        } catch (error) {
            setErrorFetchingData(true);
            setIsFetchingMoreData(false);
        }
    }, [repos, getData, isFetchingMoreData, errorFetchingData]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ErrorScreenWrapper isVisible={errorFetchingData} onPress={fetchData}>
            {repos ? (
                <FlatList
                    data={repos}
                    style={{ backgroundColor: "white" }}
                    contentContainerStyle={{ paddingVertical: medium }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Item>
                            <RepoSummary showHeader={showRepoHeader} {...item} maxLines={3} />
                        </Item>
                    )}
                    onEndReached={fetchData}
                    ListFooterComponent={() =>
                        isFetchingMoreData ? <LoadingView text="" size={40} /> : null
                    }
                />
            ) : (
                <LoadingView text="" size={80} />
            )}
        </ErrorScreenWrapper>
    );
};
const Item = React.memo(styled.View`
  padding: 15px ${medium}px;
  border-bottom-width: 0.4px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`);

export default Index;
