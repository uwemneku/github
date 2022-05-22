import { StyleSheet, View } from "react-native";
import React from "react";
import StyledText from "./Text";
import FlexContainer from "./FlexContainer";
import { pinnedRepoType } from "../types";
import Divider from "./Divider";
import Octicons from "@expo/vector-icons/Octicons";
import { languageColors } from "../constants";
import styled from "styled-components/native";
import Avatar from "./Avatar";

const RepoSummary = ({
    name,
    stargazers_count,
    language,
    description,
    maxLines,
    showHeader,
    owner,
}: pinnedRepoType & { showHeader: boolean }) => {
    return (
        <View>
            {showHeader && (
                <FlexContainer>
                    <Avatar
                        imageUrl={owner.avatar_url}
                        size={20}
                    />
                    <Divider direction="horizontal" size={10} />
                    <StyledText weight="300">{owner.login}</StyledText>
                </FlexContainer>
            )}
            <StyledText weight="bold">{name}</StyledText>
            <Divider direction="vertical" size={3} />
            {description && (
                <StyledText
                    ellipsizeMode="tail"
                    numberOfLines={maxLines}
                    weight="400"
                    color="gray"
                >
                    {description}
                </StyledText>
            )}
            <Divider direction="vertical" size={10} />
            <FlexContainer>
                <Octicons name="star-fill" color={"gold"} />
                <Divider direction="horizontal" size={5} />
                <StyledText color="gray">{formatNumber(stargazers_count)}</StyledText>
                <Divider direction="horizontal" size={10} />
                {language && (
                    <>
                        <LanguageColor color={getLanguageColor(language)} />
                        <Divider direction="horizontal" size={10} />
                        <StyledText color="gray"> {language}</StyledText>
                    </>
                )}
            </FlexContainer>
        </View>
    );
};

const formatNumber = (num: number) => {
    return num > 999 ? `${(num / 1000).toFixed(1)}k` : num;
};
const getLanguageColor = (language: string) => {
    //@ts-ignore
    return languageColors[language]?.color || "#000";
};
const LanguageColor = styled.View<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;
export default React.memo(RepoSummary);

const styles = StyleSheet.create({});
