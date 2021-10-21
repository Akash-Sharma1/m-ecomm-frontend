import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Cart, Home, OrderHistory, ProductDetails } from 'screens';
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
        tabBarStyle: [styles.tabBarStyle, styles.shadow],
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
        name={Routes.PRODUCT}
        component={ProductDetails}
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
        name={Routes.ORDER_SUMMARY}
        component={ProductDetails}
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
    bottom: Sizes.size(25),
    position: 'absolute',
    left: Sizes.size(20),
    right: Sizes.size(20),
    borderRadius: Sizes.RADIUS,
    elevation: 0,
    backgroundColor: Colors.WHITE,
    paddingBottom: Sizes.PADDING,
    padding: Sizes.PADDING,
    height: Sizes.size(80),
  },
  shadow: {
    shadowColor: Colors.GRAY_DARK,
    shadowOffset: {
      width: 0,
      height: Sizes.size(10),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomTabNavigation;
