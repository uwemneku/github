import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

interface Props {
    direction?: 'horizontal' | 'vertical'
    size?: number
}

const Divider = styled.View<Props>`
    width: ${({ size, direction }) => direction === 'horizontal' ? size : 0}px;
    height: ${({ size, direction }) => direction === 'vertical' ? size : 0}px;
    `
Divider.defaultProps = {
    direction: 'vertical',
    size: 20,
}
export default Divider