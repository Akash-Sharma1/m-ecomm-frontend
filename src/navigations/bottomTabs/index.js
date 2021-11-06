import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  AddCustomOrder, Cart, Conversations, Home, OrderHistory,
} from 'screens';
import { Routes } from 'constants';
import { Colors, Sizes } from 'styles';
import { BottomTabNavigationIcon, BottomTabNavigationText } from './TabAssets';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        headerShown: false,
        tabBarStyle: [styles.tabBarStyle],
      }}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={{
          tabBarLabel: (props) => (
            <BottomTabNavigationText label="Expolre" {...props}/>
          ),
          tabBarIcon: (props) => (
            <BottomTabNavigationIcon name="home"
              {...props} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.CONVERSATION}
        component={Conversations}
        options={{
          tabBarLabel: (props) => (
            <BottomTabNavigationText label="Chat" {...props}/>
          ),
          tabBarIcon: (props) => (
            <BottomTabNavigationIcon
              name="chatbox-ellipses" {...props} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.ADD_CUSTOM_ORDER}
        component={AddCustomOrder}
        options={{
          tabBarLabel: (props) => (
            <BottomTabNavigationText label="Enquire" {...props}/>
          ),
          tabBarIcon: (props) => (
            <BottomTabNavigationIcon
              name="plus-circle" {...props} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.CART}
        component={Cart}
        options={{
          tabBarLabel: (props) => (
            <BottomTabNavigationText label="Cart" {...props}/>
          ),
          tabBarIcon: (props) => (
            <BottomTabNavigationIcon name="cart" {...props} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.ORDER_HISTORY}
        component={OrderHistory}
        options={{
          tabBarLabel: (props) => (
            <BottomTabNavigationText label="History" {...props}/>
          ),
          tabBarIcon: (props) => (
            <BottomTabNavigationIcon name="receipt" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    borderRadius: Sizes.RADIUS,
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: Colors.WHITE,
    paddingBottom: Sizes.PADDING,
    padding: Sizes.PADDING,
  },
});

export default BottomTabNavigation;
