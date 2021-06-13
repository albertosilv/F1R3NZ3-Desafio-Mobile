import React from 'react'
import { } from 'react-native'
import { Container, style, Fundo, Section, ButtonLogout, Header, LikeContainer, UserContainer, User } from './Styles'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { LinearGradient } from 'expo-linear-gradient';
const fundo = "https://i.pinimg.com/originals/a3/ba/fc/a3bafc289e3752bc688d25c3dc5fc7ad.jpg"
const user = "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
function Profile({ navigation }) {
    return (
        <LinearGradient colors={['#d3b3a8', '#42354d']} style={style.background}>
            <Container>
                <Fundo source={{ uri: fundo }}>
                    <ButtonLogout onPress={() => navigation.navigate('Login')}><Icon name="logout" color="#9293a8" size={30} /></ButtonLogout>
                </Fundo>
                <Section></Section>
                <Header>
                    <UserContainer>
                        <User source={{ uri: fundo }} />
                    </UserContainer>
                    <LikeContainer>
                        <Icon name="heart" size={60} style={style.icon} />
                    </LikeContainer>
                </Header>
            </Container>
        </LinearGradient>
    )
}

export default Profile