import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';


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

export default DrawerContent;
