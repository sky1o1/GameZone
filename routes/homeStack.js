import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import Header from '../shared/Header';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 60
        }
    }
});

export default HomeStack