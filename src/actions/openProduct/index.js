import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import { setCurrentProductId } from 'store/reducers/products';
import { Routes } from 'constants';

const OpenProduct = ({ productId, children, routeParams, onPress, ...remainingProps }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = useCallback(() => {
    dispatch(setCurrentProductId(productId));
    onPress();
    navigation.navigate(Routes.PRODUCT, routeParams);
  }, [navigation, productId, dispatch, routeParams, onPress]);

  return (
    <Pressable onPress={handlePress} {...remainingProps}>
      {children}
    </Pressable>
  );
};

export default OpenProduct;
