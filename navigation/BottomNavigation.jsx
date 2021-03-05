import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';
import ReviewForm from '../screens/ReviewForm';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: () => (
                        <Icon name='home-filled' size={28} />
                    )
                }} />

            <Tab.Screen name='About' component={About}
                options={{
                    tabBarIcon: () => (
                        <Icon name='about-filled' size={28} />
                    )
                }}
            />

            <Tab.Screen name='Details' component={ReviewDetails}
                options={{
                    tabBarIcon: () => (
                        <Icon name='about-filled' size={28} />
                    )
                }}
            />

            <Tab.Screen name='Form' component={ReviewForm}
                options={{
                    tabBarIcon: () => (
                        <Icon name='about' size={28} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator;