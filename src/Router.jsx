import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import Login from './Pages/Login'

import Home from './Pages/Home'
import Search from './Pages/Search'
import Awards from './Pages/Awards'
import Profile from './Pages/Profile'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();
const App = () => {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false }} initialRouteName="Profile" inactiveColor="#9c9497" activeColor="#ffffff" barStyle={{ backgroundColor: '#62555a' }} >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                )
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="search" color={color} size={26} />
                )
            }} />
            <Tab.Screen name="Awards" component={Awards} options={{
                tabBarIcon: ({ color }) => (
                    <IconFont name="trophy" color={color} size={26} />
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="account-circle" color={color} size={26} />
                )
            }} />
        </Tab.Navigator>
    )
}
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="App" component={App} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
