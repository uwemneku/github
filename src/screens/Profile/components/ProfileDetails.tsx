import { View, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { Avatar, FlexContainer, StyledText } from "../../../components";
import { User } from "../../../types";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Divider from "../../../components/Divider";
import FollowButton from "./FollowButton";
import { SPACES } from "../../../constants";

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

const { small, medium } = SPACES

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
                <View style={{ marginLeft: small }}>
                    <StyledText weight="bold" size={medium}>
                        {name}
                    </StyledText>
                    <StyledText weight="300" size={13}>
                        {login}
                    </StyledText>
                </View>
            </Header>
            <StyledText>{bio}</StyledText>
            <Divider />
            <View>
                <ListItem
                    left={"location"}
                    right={<StyledText>{location}</StyledText>}
                />
                {email && <ListItem
                    left={"mail"}
                    right={<StyledText weight="bold" >{email}</StyledText>}
                />}
                <ListItem
                    left={<AntDesign name="twitter" size={15} color="gray" />}
                    right={<StyledText weight="bold" >{twitter_username}</StyledText>}
                />
                <ListItem
                    left={"person"}
                    right={
                        <>
                            <FlexContainer>
                                <StyledText weight="bold">{followers}</StyledText>
                                <Divider direction="horizontal" size={8} />
                                <StyledText >followers</StyledText>
                            </FlexContainer>
                            <Spacing />
                            <FlexContainer>
                                <StyledText weight="bold">{following}</StyledText>
                                <Divider direction="horizontal" size={8} />
                                <StyledText >following</StyledText>
                            </FlexContainer>
                        </>
                    }
                />
            </View>
            <FollowButton />
        </Container>
    );
};

interface ListItemProps {
    left: React.ReactElement | string; // When left is a string, it will be rendered as an icon
    right: React.ReactElement;
}
const ListItem = ({
    left,
    right,
}: ListItemProps) => {
    return (
        <FlexContainer style={{ marginBottom: small }} >
            {typeof left === "string" ? (
                <Octicons name={left as any} size={15} color="gray" />
            ) : (
                left
            )}
            <Spacing />
            {right}
        </FlexContainer>
    );
};

const Spacing = () => <Divider direction="horizontal" size={small} />;

const Container = styled.View`
  padding: ${medium}px;
  background-color: white;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${medium}px 0px;
`;

export default ProfileDetails;
