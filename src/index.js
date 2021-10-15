import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Home from '_screens/home';
import store from './store';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default AppContainer;
