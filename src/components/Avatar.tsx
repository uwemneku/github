import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

interface Props {
    /**The size of the avatar. Default size of 50 */
    size?: number
    imageUrl: string
}
const Avatar = ({ size = 80, imageUrl }: Props) => {
    return (
        <Container  {...{ size }} >
            <StyledImage resizeMode='contain' resizeMethod='resize' source={{ uri: imageUrl }} />
        </Container >
    )
}

const Container = styled.View<Required<Pick<Props, 'size'>>>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    overflow: hidden;
    border-radius: ${({ size }) => size / 2}px;
    background-color: red;
`

const StyledImage = styled.Image`
    width: 100%;
    height: 100%;
`

export default Avatar
