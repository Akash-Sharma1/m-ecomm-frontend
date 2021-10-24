import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts, Sizes } from 'styles';
import { Ratings, TextExpander } from 'components';

const Features = ({ product }) => {
  return (
    <View style={styles.container}>

    </View>
  );
};

export default Features;

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
