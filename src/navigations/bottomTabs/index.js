import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AddCustomOrder, Cart, Chat, Home, OrderHistory } from 'screens';
import { Routes } from 'constants';
import { Colors, Mixins, Sizes } from 'styles';
import { BottomTabNavigationIcon, BottomTabNavigationText } from './TabAssets';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        headerShown: false,
        tabBarStyle: [styles.tabBarStyle, Mixins.simpleShadow()],
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
        name={Routes.CHAT}
        component={Chat}
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
    bottom: Platform.OS === 'ios' ? Sizes.size(25) : Sizes.size(15),
    position: 'absolute',
    left: Sizes.size(20),
    right: Sizes.size(20),
    borderRadius: Sizes.RADIUS,
    elevation: 0,
    backgroundColor: Colors.WHITE,
    paddingBottom: Sizes.PADDING,
    padding: Sizes.PADDING,
    height: Sizes.size(70),
  },
});

export default BottomTabNavigation;
