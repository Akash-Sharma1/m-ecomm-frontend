import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Layout } from 'styles';
import StackNavigator from 'navigations/stack';
import DrawerContent from './drawerContent';


const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <View style={Layout.flexRow} >
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        drawerType="slide"
        initialRouteName="Screens"
        drawerContent={(props) => {
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens" component={StackNavigator} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigation;
