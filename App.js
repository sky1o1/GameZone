import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/Drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    getFonts()
  }, [])

  // if (fontsLoaded) {
  //   return (
  //     <Home />
  //   );
  // } else {
  //   return (
  //     <AppLoading 
  //       startAsync={getFonts} 
  //       onFinish={() => setFontsLoaded(true)} 
  //       onError={console.warn}
  //     />
  //   )
  // }

  return(
    <Navigator />
  )

}