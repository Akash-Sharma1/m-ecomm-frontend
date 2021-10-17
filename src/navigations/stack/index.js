import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import { Home, ProductDetails } from 'screens';
import { Routes } from 'constants';
import styles from './styles';


const Stack = createStackNavigator();


const StackNavigator = ({ navigation = null, style = {} }) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.HOME}
      >
        <Stack.Screen name={Routes.HOME} component={Home} />
        <Stack.Screen name={Routes.PRODUCT} component={ProductDetails} />
      </Stack.Navigator>
    </Animated.View>
  );
};


export default StackNavigator;
