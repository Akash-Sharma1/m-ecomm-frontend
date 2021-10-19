import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Colors, Sizes } from 'styles';

const Star = ({ type, style }) => {
  if (type === 'complete') {
    return (
      <FontAwesome name="star" style={[styles.star, style]} />
    );
  } else if (type === 'half') {
    return (
      <FontAwesome name="star-half" style={[styles.star, style]} />
    );
  } else if (type === 'empty') {
    return (
      <FontAwesome name="star-o" style={[styles.star, style]} />
    );
  } else if (type !== null) {
    return (
      <Text style={styles.text}>
        {`(${type})`}
      </Text>
    );
  } else {
    return null;
  }
};


const styles = StyleSheet.create({
  star: {
    color: Colors.YELLOW,
    fontSize: Sizes.H5,
    paddingRight: Sizes.size(5),
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Sizes.H5,
  },
});

export default Star;
