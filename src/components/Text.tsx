import { TextStyle, TextPropsIOS, TextPropsAndroid } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

interface Props extends TextPropsIOS, TextPropsAndroid {
    size?: number,
    weight?: TextStyle['fontWeight']
    color?: string
    children: string | number | JSX.Element;
}

const AppText = ({ size = 14, weight = 'normal', color = 'black', ...props }: Props) => {
    return (
        <Text {...{ size, weight, color, ...props }} />
    )
}

const Text = styled.Text<Pick<Props, 'size' | 'weight' | 'color'>>`
    font-size: ${({ size }) => size}px;
    font-weight: ${({ weight }) => weight};
    color: ${({ color }) => color};
`

export default AppText
