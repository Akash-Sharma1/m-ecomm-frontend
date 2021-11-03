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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.RADIUS_2,
    paddingLeft: Sizes.size(4.5),
    paddingRight: Sizes.size(3.5),
    paddingTop: Sizes.size(4.5),
    paddingBottom: Sizes.size(3.5),
  },
  heart: {
    fontSize: Sizes.H1,
    color: Colors.BLACK,
  },
  activeHeart: {
    fontSize: Sizes.H1,
    color: Colors.BLACK,
  },
});

export default Bookmark;
