import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import { Accounts, OrderHistory, OrderSummary, ProductDetails } from 'screens';
import { Routes } from 'constants';
import { Layout } from 'styles';
import BottomTabNavigation from 'navigations/bottomTabs';

const Stack = createStackNavigator();

const StackNavigator = ({ style }) => {
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
        <Stack.Screen name={Routes.CATEGORIES} component={ProductDetails} />
        <Stack.Screen name={Routes.SEARCH_RESULTS} component={ProductDetails} />
        <Stack.Screen name={Routes.ORDER_SUMMARY} component={OrderSummary} />
        <Stack.Screen name={Routes.PAYMENTS} component={ProductDetails} />
        <Stack.Screen name={Routes.ORDER_TRACKING} component={ProductDetails} />
        <Stack.Screen name={Routes.ACCOUNTS} component={Accounts} />
        <Stack.Screen name={Routes.AUTH} component={ProductDetails} />
      </Stack.Navigator>
    </Animated.View>
  );
};


export default StackNavigator;
