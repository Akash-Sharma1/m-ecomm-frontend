import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts, Sizes } from 'styles';
import { Ratings, TextExpander } from 'components';

const Description = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Ratings
        ratings={product.ratings}
        style={styles.ratings}
        showSubText
        customText={product.timesReviewed}
      />
      <TextExpander
        style={styles.description}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt magna in malesuada dignissim. Nam sed viverra ipsum. Nunc a ultrices orci, eget ultricies urna. Nulla ut pellentesque velit. Sed id metus et nisi scelerisque ullamcorper id nec magna. Suspendisse potenti. Etiam sed consectetur metus, ut venenatis elit."
      />
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    ...Fonts.H1,
    ...Fonts.BOLD,
  },
  ratings: {
    paddingVertical: Sizes.PADDING,
  },
  description: {
    paddingTop: Sizes.PADDING,
  },
});
