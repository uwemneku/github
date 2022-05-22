import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StyledText from "./Text";
import FlexContainer from "./FlexContainer";
import { pinnedRepoType } from "../types";
import styled from "styled-components/native";
import Avatar from "./Avatar";
import Divider from "./Divider";

const RepoSummary = ({
    name,
    stargazers_count,
    language,
    description,
    maxLines,
}: pinnedRepoType) => {
    return (
        <Container>
            <FlexContainer>
                <Avatar imageUrl="https://avatars.githubusercontent.com/u/30045115?v=4" size={20} />
                <Divider direction="horizontal" size={10} />
                <StyledText weight="300" >name</StyledText>
            </FlexContainer>
            <StyledText weight="bold"  >{name}</StyledText>
            <StyledText ellipsizeMode="tail" numberOfLines={maxLines} weight="400" >{description}</StyledText>
            <Divider direction="vertical" size={10} />
            <FlexContainer>
                <FlexContainer>
                    <StyledText color="gray" >{stargazers_count}</StyledText>
                </FlexContainer>
                <StyledText color="gray" > {language}</StyledText>
            </FlexContainer>
        </Container>
    );
};

const Container = styled.View`
    padding: 15px;
    width: 320px;
    border-width: 0.5px;
    margin-right: 20px;
    border-radius: 5px;
    border-color: gray;
`
export default RepoSummary;

const styles = StyleSheet.create({});
