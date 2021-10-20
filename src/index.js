import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import store from 'store';
import DrawerContent from './navigations/drawer';


const AppContainer = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerContent />
      </NavigationContainer>
    </Provider>
  );
};

export default AppContainer;
