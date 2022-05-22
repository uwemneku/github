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
        <View>
            <StyledText weight="bold"  >{name}</StyledText>
            {description && <StyledText ellipsizeMode="tail" numberOfLines={maxLines} weight="400" >{description}</StyledText>}
            <Divider direction="vertical" size={10} />
            <FlexContainer>
                <FlexContainer>
                    <StyledText color="gray" >{stargazers_count}</StyledText>
                </FlexContainer>
                <StyledText color="gray" > {language}</StyledText>
            </FlexContainer>
        </View>
    );
};


export default React.memo(RepoSummary);

const styles = StyleSheet.create({});
