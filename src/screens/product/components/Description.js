import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';
import { Ratings, TextExpander } from 'components';

const Description = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.expandableContainer}>
        <Text
          style={styles.title}
          ellipsizeMode='tail'
          numberOfLines={5}
        >
          {product.title}
        </Text>

        <Ratings
          rating={3}
          containerStyle={styles.ratings}
          style={styles.ratingsIcon}
          customText={product.timesReviewed}
          showSubText
        />

        <Text style={styles.subtitle}>Description:</Text>
        <TextExpander text={product.description} style={styles.description}/>

        <Text style={styles.subtitle}>Available Sizes:</Text>
        <Text style={styles.text}>7 foot</Text>
      </View>

    </View>
  );
};

export default Description;

const RATING_HEIGHT = Sizes.size(35);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  expandableContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  ratings: {
    paddingVertical: Sizes.PADDING,
    height: RATING_HEIGHT,
  },
  ratingsIcon: {
    color: Colors.BLACK,
  },
  title: {
    ...Fonts.H3,
    ...Fonts.BOLD,
  },
  subtitle: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.GRAY_DARK,
    marginTop: Sizes.MARGIN,
    paddingVertical: Sizes.PADDING,
  },
  description: {
    flex: 0,
  },
});
