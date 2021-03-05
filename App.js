import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import Navigator from './routes/Drawer';
import BottomNavigator from './navigation/BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
});

const Stack = createStackNavigator();

export default function App() {
  
  useEffect(() => {
    getFonts()
  }, [])


  return(
    <>
    <Navigator />
    {/* <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer> */}
    </>
  )

}