import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Avatar, FlexContainer, StyledText } from "../../../components";
import { User } from "../../../types";
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Divider from "../../../components/Divider";

type Props = Pick<
    User,
    | "avatar_url"
    | "bio"
    | "location"
    | "email"
    | "twitter_username"
    | "followers"
    | "following"
    | "login"
    | "name"
>;

const ProfileDetails = ({
    avatar_url,
    bio,
    followers,
    following,
    location,
    twitter_username,
    email,
    name,
    login,
}: Props) => {
    return (
        <Container>
            <Header>
                <Avatar imageUrl={avatar_url} />
                <View style={{ marginLeft: 10 }}>
                    <StyledText weight="bold" size={20}>
                        {name}
                    </StyledText>
                    <StyledText weight="300" size={13}>
                        {login}
                    </StyledText>
                </View>
            </Header>
            <StyledText>{bio}</StyledText>
            <View>
                <FlexContainer>
                    <Octicons name="location" size={15} color="gray" />
                    <Divider />
                    <StyledText >{location}</StyledText>
                </FlexContainer>
                <FlexContainer>
                    <Octicons name="mail" size={15} color="gray" />
                    <Divider />
                    <StyledText >{email}</StyledText>
                </FlexContainer>
                <FlexContainer>
                    <AntDesign name="twitter" size={15} color='gray' />
                    <StyledText weight="bold">{twitter_username}</StyledText>
                </FlexContainer>
                <FlexContainer>
                    <FlexContainer>
                        <StyledText weight="bold">{followers}</StyledText>
                        <StyledText weight="bold">followers</StyledText>
                    </FlexContainer>
                    <FlexContainer>
                        <StyledText weight="bold">{following}</StyledText>
                        <StyledText weight="bold">following</StyledText>
                    </FlexContainer>
                </FlexContainer>
            </View>
        </Container>
    );
};

const Container = styled.View`
  padding: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;
`;

export default ProfileDetails;
