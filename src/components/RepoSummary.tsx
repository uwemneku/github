import { StyleSheet, View } from "react-native";
import React from "react";
import StyledText from "./Text";
import FlexContainer from "./FlexContainer";
import { pinnedRepoType } from "../types";
import Divider from "./Divider";
import Octicons from "@expo/vector-icons/Octicons";
import { languageColors, SPACES } from "../constants";
import styled from "styled-components/native";
import Avatar from "./Avatar";

const { small, reallySmall, medium, tiny } = SPACES;

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
                    <Avatar imageUrl={owner.avatar_url} size={medium} />
                    <Divider direction="horizontal" size={small} />
                    <StyledText weight="300">{owner.login}</StyledText>
                </FlexContainer>
            )}
            <Divider size={small} />
            <StyledText weight="bold">{name}</StyledText>
            <Divider direction="vertical" size={tiny} />
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
            <Divider direction="vertical" size={reallySmall} />
            <FlexContainer>
                <Octicons name="star-fill" color={"gold"} />
                <Divider direction="horizontal" size={tiny} />
                <StyledText color="gray">{formatNumber(stargazers_count)}</StyledText>
                <Divider direction="horizontal" size={small} />
                {language && (
                    <>
                        <LanguageColor color={getLanguageColor(language)} />
                        <Divider direction="horizontal" size={small} />
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
  width: ${small}px;
  height: ${small}px;
  border-radius: ${reallySmall}px;
`;
export default React.memo(RepoSummary);

const styles = StyleSheet.create({});
