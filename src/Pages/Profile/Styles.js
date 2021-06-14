import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'
export const style = StyleSheet.create({
    background: {
        flex: 1,
    },
    like:{
        borderRadius:100,
        padding:15,
        borderColor:'#9899ad',
        borderWidth:1,
        backgroundColor:'#fff',
        left:70,
    },
    check:{
        position:'absolute',
        top:135,
        left:120,
        backgroundColor:'#441d92',
        borderColor:'#441d92',
        borderRadius:100,
        color:'#fff',
    },
    whatsapp:{
        color:'#fff',
        backgroundColor:'#40c351',
        borderRadius:100,
        borderWidth:1,
        borderColor:'#fff'
    }

})
export const Container = styled.View`
    flex:1;
    margin:50px 25px 0px 30px;
    background-color:#fff
    
`
export const BackgroundUser = styled.ImageBackground`
    flex:0.4;
    flex-direction:row-reverse;
    position: absolute;
    width:100%
    height:250px;
`
export const Section = styled.View`
    flex:0.6;
    top: 30%;
    background-color:#fff;
    border-top-left-radius: 25px;
`
export const ButtonLogout = styled.TouchableOpacity`
    padding:15px;
`
export const Header = styled.View`
    flex-direction:row;
    justify-content:space-between;
    position:absolute;
    top:23%;
`
export const ContainerOne = styled.View`
    flex:1 
    left:5%;
`
export const ContainerTwo = styled.View`
    flex-direction:column;
    right:24%;
    width:90px;
`
export const User = styled.Image`
    border-radius:100px;
    height:170px;
    width:170px;
    overflow: hidden;
    border-width: 10px;
    border-color: #fff;
`
export const UserName = styled.Text`
    font-size:30px;
    width:60%;
    font-weight: 600;

`
export const Instagram = styled.Text`
    font-size:15px;
    width:60%;
    color:#5c18e4
    padding-top:10px;
    padding-bottom:10px;
`
export const Localization = styled.Text`
    font-size:18px;
    width:70%;
    font-style: italic;
    font-weight: 100;
`

export const InformationContainer = styled.View`
    flex-direction:row;
`
export const Information  = styled.View`
    flex-direction:column;
    margin:7px;
`

export const Data = styled.Text`
    font-size:20px;
    font-weight: 700;
    color:#61626b;
    text-align:center;
`
export const Description = styled.Text`
    font-size:20px;
    font-weight: 200;
    color:#61626b;
`
export const AddFriends = styled.TouchableOpacity`
    flex-direction:row;
    margin-top:20px;
    background-color:#441d92;
    color:#fff;
    width:170px;
    height:50px;
    align-items:center;
    justify-content:center
    border-radius:7px;
 `
 export const Text = styled.Text`
    color:#fff
    font-size:17px;
`
export const Whatsapp = styled.View`
    flex-direction:row;
    margin-top:25px;
`
export const WhatsappNumber = styled.Text`
    width:170px;
    font-size:15px;
`

export const Bio = styled.Text`
    top:20%
    text-align:center;
    font-size:25px;
    font-style: italic;
`