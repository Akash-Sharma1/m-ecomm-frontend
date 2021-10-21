import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import { Home, ProductDetails } from 'screens';
import { Routes } from 'constants';
import { Layout } from 'styles';
import BottomTabNavigation from 'navigations/bottomTabs';


const Stack = createStackNavigator();


const StackNavigator = ({ navigation = null, style = {} }) => {
  return (
    <Animated.View style={[Layout.flexCol, style]}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.HOME}
      >
        <Stack.Screen
          name={Routes.BOTTOM_TABS}
          component={BottomTabNavigation}
        />

        <Stack.Screen name={Routes.PRODUCT} component={ProductDetails} />
      </Stack.Navigator>
    </Animated.View>
  );
};


export default StackNavigator;
