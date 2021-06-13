import React from 'react'
import {  } from 'react-native'
import {
    Container,
    style,
    BackgroundUser,
    Section,
    ButtonLogout,
    Header,
    ContainerOne,
    ContainerTwo,
    User,
    UserName,
    Instagram,
    Localization,
    Information,
    Data,
    Description,
    InformationContainer,
    AddFriends,
    Text,
    Whatsapp,
    WhatsappNumber,
    Bio
} from './Styles'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { LinearGradient } from 'expo-linear-gradient';
const backgroundUser = "https://i.pinimg.com/originals/a3/ba/fc/a3bafc289e3752bc688d25c3dc5fc7ad.jpg"
const user = "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
function Profile({ navigation }) {
    return (
        <LinearGradient colors={['#d3b3a8', '#42354d']} style={style.background}>
            <Container>
                <BackgroundUser source={{ uri: backgroundUser }}>
                    <ButtonLogout onPress={() => navigation.navigate('Login')}><Icon name="logout" color="#9293a8" size={30} /></ButtonLogout>
                </BackgroundUser>
                <Section>
                </Section>
                <Header>
                    <ContainerOne>
                        <User source={{ uri: backgroundUser }} />
                        <MaterialIcon name="check" size={35} style={style.check} />
                        <UserName>Joana Silva </UserName>
                        <Instagram>@joanasilva_1</Instagram>
                        <Localization>Campina Grande</Localization>
                        <Localization>PB, Brasil</Localization>
                    </ContainerOne>
                    <ContainerTwo>
                        <Icon name="heart" size={60} style={style.like} />
                        <InformationContainer>
                            <Information>
                                <Data>236</Data>
                                <Description>Likes</Description>
                            </Information>
                            <Information>
                                <Data>550</Data>
                                <Description>Amigos</Description>
                            </Information>
                        </InformationContainer>
                        <AddFriends title="Add Amigos"><FontAwesome5Icon color="#fff"name="user-friends" size={26}/><Text> Add Amigos</Text></AddFriends>
                        <Whatsapp>
                            <MaterialIcon name="whatsapp" size={25} style={style.whatsapp}/>
                            <WhatsappNumber>99 99999-9999</WhatsappNumber>
                        </Whatsapp>
                    </ContainerTwo>
                </Header>
                <Bio>" Especialidades em comerciais  de moda "</Bio>
            </Container>
        </LinearGradient>
    )
}

export default Profile