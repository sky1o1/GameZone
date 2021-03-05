import React from 'react';
import {Image, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

function About(){
    return(
        <View style={globalStyles.container}>
            <Text><h1>Welcome to the Game Zone</h1></Text>
            <Text>In this app ypu can review your favorite games and keep a track of all the latest games.</Text>
            <img src={require('../assets/images/download.jpeg')} />
        </View>
    )
}

export default About;