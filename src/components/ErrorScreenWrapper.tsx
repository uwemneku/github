import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import StyledText from "./Text";
import styled from "styled-components/native";
import Divider from "./Divider";
interface Props {
    isVisible: boolean;
    onPress: () => void;
}

const ErrorScreenWrapper: FC<Props> = ({ isVisible, onPress, children }) => {
    return (
        <>
            {
                isVisible ?

                    <Container>
                        <StyledText weight="bold" size={20}  >Something went wrong</StyledText>
                        <Divider />
                        <Button {...{ onPress }} >
                            <StyledText color="skyblue" weight="600" >
                                TRY AGAIN
                            </StyledText>
                        </Button>
                    </Container>
                    : children
            }
        </>
    );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
    background-color: white;
    padding: 10px 20px;
    border-radius: 5px;
        `

export default ErrorScreenWrapper;

const styles = StyleSheet.create({});
