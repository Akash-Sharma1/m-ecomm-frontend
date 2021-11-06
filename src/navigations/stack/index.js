import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import { Accounts, Cart, Chat, OrderHistory, OrderSummary, ProductDetails } from 'screens';
import { Routes } from 'constants';
import { Colors, Layout } from 'styles';
import BottomTabNavigation from 'navigations/bottomTabs';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const StackNavigator = ({ style }) => {
  return (
    <Animated.View style={[Layout.flexCol, style]}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: styles.container,
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
        <Stack.Screen name={Routes.ORDER_HISTORY} component={OrderHistory} />
        <Stack.Screen name={Routes.ACCOUNTS} component={Accounts} />
        <Stack.Screen name={Routes.AUTH} component={ProductDetails} />
        <Stack.Screen name={Routes.CART} component={Cart} />
        <Stack.Screen name={Routes.CHAT} component={Chat} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
  },
});

export default StackNavigator;
