import React from 'react'
import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/Octicons'
import StyledText from './Text'

interface Props {
    label: string
    count: number
    icon: { name: string, color: string }
    onPress?: () => void
}

const List = ({ count, icon, label, onPress }: Props) => {
    return (
        <Container onPress={onPress} >
            <IconWrapper color={icon.color} >
                <Icon name={icon.name as any} size={20} color={'white'} />
            </IconWrapper>
            <StyledText weight='700' size={15} style={{ flex: 1 }} >{label}</StyledText>
            <StyledText weight='400' >{count}</StyledText>
        </Container>
    )
}

const IconWrapper = styled.View<{ color: string }>`
    width: 35px;
    height: 35px;
    border-radius: 5px;
    align-items:center ;
    justify-content: center;
    margin-right: 10px;
    background-color: ${({ color }) => color};
    `

const Container = styled.TouchableOpacity`
    padding: 10px 20px;
    flex-direction: row;
    align-items: center;
    background-color: white;
`

export default List
