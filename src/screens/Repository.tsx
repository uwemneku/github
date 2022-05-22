import { FlatList } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { HomeParams, Repository, StackScreenProps } from "../types";
import { LoadingView, RepoSummary } from "../components";
import { fetchDataRecursively } from "../services/api";
import styled from "styled-components/native";
import { useIsFocused } from "@react-navigation/native";


const Index = ({ route }: StackScreenProps<HomeParams, 'Repository'>) => {
    const [repos, setRepos] = useState<Repository[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const isScreenFocused = useIsFocused()
    const repoType = route.params.type;
    const showRepoHeader = repoType !== 'repos';
    const getData = useMemo(() => fetchDataRecursively(repoType), []);
    const handleOnEndReached = useCallback(async () => {
        if (isLoading) return;
        setIsLoading(true);
        const newRepos = await getData.next();
        isScreenFocused && newRepos.value && setRepos([...repos!, ...newRepos.value]);
        setIsLoading(false);
    }, [repos, getData, isLoading]);
    useEffect(() => {
        const repo = async () => {
            const repos = await getData.next();
            isScreenFocused && repos.value &&
                setRepos(repos.value);
        };
        repo();
    }, []);

    return (
        <>
            {repos ? (
                <FlatList
                    data={repos}
                    style={{ backgroundColor: "white" }}
                    contentContainerStyle={{ paddingVertical: 20 }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Item>
                            <RepoSummary showHeader={showRepoHeader} {...item} maxLines={3} />
                        </Item>
                    )}
                    onEndReached={handleOnEndReached}
                    ListFooterComponent={() => isLoading ? <LoadingView text="" size={100} /> : null}
                />
            ) : (
                <LoadingView text="" size={80} />
            )}
        </>
    );
};
const Item = React.memo(styled.View`
  padding: 15px 20px;
  border-bottom-width: 0.4px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`);

export default Index;
