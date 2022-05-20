import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

interface Props {
    /**The size of the avatar. Default size of 50 */
    size?: number
}
const Avatar = ({ size = 80 }: Props) => {
    return (
        <Container size={size} >
            <Text>Avatar</Text>
        </Container>
    )
}

const Container = styled.View<Required<Props>>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    overflow: hidden;
    border-radius: ${({ size }) => size / 2}px;
    background-color: red;
`

export default Avatar
