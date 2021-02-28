import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../styles/global';

function ReviewDetails({navigation}){
    console.log(navigation.getParam('title'))

    return(
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
        </View>
    )
}

export default ReviewDetails;