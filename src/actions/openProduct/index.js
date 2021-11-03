import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import { setCurrentProductId } from 'store/reducers/products';
import { Routes } from 'constants';

const OpenProduct = ({ productId, children, ...remainingProps }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    dispatch(setCurrentProductId(productId));
    navigation.navigate(Routes.PRODUCT);
  }, [navigation, productId, dispatch]);

  return (
    <Pressable {...remainingProps} onPress={onPress} >
      {children}
    </Pressable>
  );
};

export default OpenProduct;
