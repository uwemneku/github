import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { pinnedRepoData } from '../../../constants'
import { RepoSummary } from '../../../components'
import styled from 'styled-components/native'

const PinnedRepositories = () => {
    return (
        <Container horizontal showsHorizontalScrollIndicator={false} >
            {pinnedRepoData.map((data, index) => <RepoSummary key={index} {...data} maxLines={1} />)}
        </Container>
    )
}
const Container = styled.ScrollView`
    padding: 20px;
    border-width: 0px;
    border-bottom-width: 0.5px;
    border-color: gray;
`

export default PinnedRepositories

const styles = StyleSheet.create({})