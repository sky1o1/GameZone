import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
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

export default createAppContainer(HomeStack);