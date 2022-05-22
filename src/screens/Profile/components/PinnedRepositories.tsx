import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { pinnedRepoData } from '../../../constants'
import { Avatar, FlexContainer, RepoSummary, StyledText } from '../../../components'
import styled from 'styled-components/native'
import Divider from '../../../components/Divider'
import { fetchDataRecursively } from '../../../services/api'
import { Repository } from '../../../types'

interface Props {
    data: Repository[]
}
const PinnedRepositories = ({ data }: Props) => {

    return (
        <Container horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 20 }} >
            {data.map((data, index) =>
                <ItemContainer key={index} >
                    <RepoSummary showHeader  {...data} maxLines={1} />
                </ItemContainer>
            )}
        </Container>
    )
}


const Container = styled.ScrollView`
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