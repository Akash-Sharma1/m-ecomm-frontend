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
        label={Routes.STACK}
        onPress={() => props.navigation.navigate(Routes.STACK)}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
