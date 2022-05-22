import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { pinnedRepoData } from '../../../constants'
import { Avatar, FlexContainer, RepoSummary, StyledText } from '../../../components'
import styled from 'styled-components/native'
import Divider from '../../../components/Divider'

const PinnedRepositories = () => {
    return (
        <Container horizontal showsHorizontalScrollIndicator={false} >
            {pinnedRepoData.map((data, index) =>
                <ItemContainer key={index} >
                    <FlexContainer>
                        <Avatar imageUrl="https://avatars.githubusercontent.com/u/30045115?v=4" size={20} />
                        <Divider direction="horizontal" size={10} />
                        <StyledText weight="300" >name</StyledText>
                    </FlexContainer>
                    <Divider />
                    <RepoSummary  {...data} maxLines={1} />
                </ItemContainer>
            )}
        </Container>
    )
}


const Container = styled.ScrollView`
    padding: 20px;
    border-width: 0px;
    border-bottom-width: 0.5px;
    background-color: white;
    border-color: gray;

`

const ItemContainer = styled.View`
    padding: 15px;
    width: 320px;
    border-width: 0.5px;
    margin-right: 20px;
    border-radius: 5px;
    border-color: gray;
`

export default PinnedRepositories

const styles = StyleSheet.create({})