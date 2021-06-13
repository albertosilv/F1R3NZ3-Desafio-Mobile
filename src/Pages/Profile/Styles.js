import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'
export const style = StyleSheet.create({
    background: {
        flex: 1,
    },
    icon:{
        borderRadius:100,
        padding:15,
        borderColor:'#9899ad',
        borderWidth:1
    }
})
export const Container = styled.View`
    flex:1;
    margin:50px 25px 0px 30px;
    background-color:#fff
    
`
export const Fundo = styled.ImageBackground`
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
export const LikeContainer = styled.View`
    background:#fff,
    border-radius:100px;
    right:2%;
`
export const UserContainer = styled.View`
    flex:1 
    left:5%;
`
export const User = styled.Image`
    border-radius:100px;
    height:170px;
    width:170px;
    overflow: hidden;
    border-width: 10px;
    border-color: #fff;
`
