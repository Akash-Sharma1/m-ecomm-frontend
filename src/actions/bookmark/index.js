import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { toggleBookmark } from 'store/reducers/products';
import { Colors, Mixins, Sizes } from 'styles';

const Bookmark = ({ productId, containerStyle, style }) => {
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
        isBookmarked && styles.activeContainer,
        containerStyle,
      ]}
      onPress={handlePress}
    >
      {isBookmarked ? (
        <AntDesign name="heart" style={[styles.activeHeart, style]} />
      ) : (
        <AntDesign name="heart" style={[styles.heart, style]} />
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
  activeContainer: {
    backgroundColor: Colors.PRIMARY,
    ...Mixins.simpleShadow(),
  },
  heart: {
    fontSize: Sizes.H5,
    color: Colors.GRAY_MEDIUM,
  },
  activeHeart: {
    fontSize: Sizes.H5,
    color: Colors.WHITE,
  },
});

export default Bookmark;
