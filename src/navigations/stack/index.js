import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import Home from 'screens/home';
import ProductDetails from 'screens/product';
import styles from '../styles/stack';


const Stack = createStackNavigator();


const StackNavigator = ({ navigation = null, style = {} }) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={ProductDetails} />
      </Stack.Navigator>
    </Animated.View>
  );
};


export default StackNavigator;
