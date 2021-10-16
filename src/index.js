import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import Home from 'screens/home';
import AppContainerStyles from 'styles/App';
import store from './store';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={AppContainerStyles.container}>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default AppContainer;
