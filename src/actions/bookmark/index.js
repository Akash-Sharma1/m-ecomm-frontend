import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleBookmark } from 'store/reducers/products';
import ClickableIcon from '../../components/ClickableIcon';

const Bookmark = ({ productId, containerStyle, style = {}, activeStyle = {} }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products[productId]);
  const { isBookmarked } = product || {};

  const handlePress = useCallback(() => {
    const newBookmark = !isBookmarked;

    dispatch(toggleBookmark(
      { productId, setBookmark: newBookmark },
    ));
  }, [dispatch, productId, isBookmarked]);

  const iconStyle = isBookmarked ? style : { ...style, ...activeStyle };

  return (
    <ClickableIcon
      containerStyle={containerStyle}
      style={iconStyle}
      onPress={handlePress}
      iconName={isBookmarked ? 'heart' : 'heart-outline'}
    />
  );
};


export default Bookmark;
