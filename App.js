import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import AppContainer from './src';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider>
        <AppContainer />
      </NativeBaseProvider>
    );
  }
}
