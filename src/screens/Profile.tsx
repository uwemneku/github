import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, StyledText } from '../components'
import { getUser } from '../services/api'
import { User } from '../types'
import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const Profile = () => {
    const [userData, setUserData] = useState<User | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            const user = await getUser()
            setUserData(user)
            console.log(user)
        }
        fetchData()
    }, [])

    return (
        <View style={{ flex: 1 }} >
            {
                userData && <>
                    <View>
                        <Icon name='settings-helper' size={40} />
                        <Icon name='settings-helper' size={40} />
                    </View>
                    <Header>
                        <Avatar />
                        <View>
                            <StyledText weight='bold' >{userData.name}</StyledText>
                            <StyledText weight='bold' >{userData.login}</StyledText>
                        </View>
                    </Header>
                    <StyledText>{userData.bio}</StyledText>
                    <View>
                        <StyledText weight='bold' >{userData.location}</StyledText>
                        <StyledText weight='bold' >{userData.email}</StyledText>
                        <StyledText weight='bold' >{userData.twitter_username}</StyledText>
                        <View>
                            <View>
                                <StyledText weight='bold' >{userData.followers}</StyledText>
                                <StyledText weight='bold' >followers</StyledText>
                            </View>
                            <View>
                                <StyledText weight='bold' >{userData.following}</StyledText>
                                <StyledText weight='bold' >following</StyledText>
                            </View>
                        </View>
                    </View>
                </>
            }
        </View>
    )
}

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px;`
export default Profile
