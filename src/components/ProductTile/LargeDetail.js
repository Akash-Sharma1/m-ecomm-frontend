import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { Colors, Mixins, Sizes } from 'styles';
import { OpenProduct } from 'actions';
import { setAccentColorIndex } from 'store/reducers/general';
import BackgroundFloater from '../BackgroundFloater';
import ProductDetails from './components/ProductDetails';

const LargeDetail = ({ product, tileColor=0, style, ...remainingProps }) => {
  const dispatch = useDispatch();

  const handlePress = React.useCallback(() => {
    dispatch(setAccentColorIndex(tileColor));
  }, [dispatch, tileColor]);

  return (
    <OpenProduct
      onPress={handlePress}
      productId={product.id}
      style={[
        styles.container,
        Mixins.populateStyleProperty('backgroundColor', Colors.MUTED_2_PALLATE, tileColor),
        style,
      ]}
      {...remainingProps}
    >
      <BackgroundFloater containerStyle={styles.floaterContainerStyle} />
      <Image style={styles.images} source={{ uri: product.image }} />

      <ProductDetails
        style={styles.textContainer}
        product={product}
        tileColor={tileColor}
      />
    </OpenProduct>
  );
};

export default LargeDetail;

const PRODUCT_TILE_SIZE = Sizes.size(300);
const PRODUCT_TILE_IMAGE_SIZE = Sizes.size(190);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: Sizes.RADIUS_32,
    height: PRODUCT_TILE_SIZE,
    paddingVertical: Sizes.PADDING,
  },
  floaterContainerStyle: {
    justifyContent: 'flex-start',
    marginTop: Sizes.size(30),
  },
  images: {
    height: PRODUCT_TILE_IMAGE_SIZE,
    resizeMode: 'contain',
  },
  textContainer: {
    paddingHorizontal: 2.5 * Sizes.PADDING,
    marginTop: Sizes.MARGIN,
  },
});
