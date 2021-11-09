import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { toggleBookmark } from 'store/reducers/products';
import { Colors, Sizes } from 'styles';

const Bookmark = ({ productId, containerStyle, style, activeStyle }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products[productId]);
  const { isBookmarked } = product || {};

  const handlePress = useCallback(() => {
    const newBookmark = !isBookmarked;

    dispatch(toggleBookmark(
      { productId, setBookmark: newBookmark },
    ));
  }, [dispatch, productId, isBookmarked]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
      ]}
      onPress={handlePress}
    >
      {isBookmarked ? (
        <Ionicons name="heart" style={[styles.activeHeart, style, activeStyle]} />
      ) : (
        <Ionicons name="heart-outline" style={[styles.heart, style]} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: Sizes.RADIUS,
    padding: Sizes.PADDING,
  },
  heart: {
    fontSize: Sizes.H1,
  },
  activeHeart: {
    fontSize: Sizes.H1,
  },
});

export default Bookmark;
