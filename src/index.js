import React from 'react';
import { Provider } from 'react-redux';

import Drawer from 'navigations/drawer';
import store from 'store';

import { NavigationContainer } from '@react-navigation/native';


const AppContainer = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
};

export default AppContainer;
