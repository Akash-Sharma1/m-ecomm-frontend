import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import AppContainer from './src';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nexa-Light': require('assets/fonts/Nexa-Light.otf'),
    'Nexa-Bold': require('assets/fonts/Nexa-Bold.otf'),
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
