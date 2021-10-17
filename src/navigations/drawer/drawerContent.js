import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import { Routes } from 'constants';


const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <DrawerItem
        label={Routes.HOME}
        onPress={() => props.navigation.navigate(Routes.HOME)}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
