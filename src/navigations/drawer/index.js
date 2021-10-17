import React from 'react';
import { View } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import { Layout } from 'styles';
import StackNavigator from 'navigations/stack';

const Drawer = createDrawerNavigator();


const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </DrawerContentScrollView>
  );
};


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
