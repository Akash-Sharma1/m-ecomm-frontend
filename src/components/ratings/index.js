import React from 'react';
import { StyleSheet, View } from 'react-native';

import Star from './Star';

/**
 * @param {variant} string [default, compact]
 */
const Ratings = ({
  rating = 0, showSubText, style, variant='default',
}) => {
  let completeStars = 0;
  let emptyStars = 0;
  let halfStar = 0;

  if (variant === 'default') {
    completeStars = Math.floor(rating);
    emptyStars = Math.floor(5 - rating);
    halfStar = 5 - completeStars - emptyStars;
  } else if (variant === 'compact') {
    completeStars = Math.floor(rating) && 1;
    halfStar = ((rating - Math.floor(rating)) && 1 - completeStars);
    emptyStars = 1 - (completeStars || halfStar);
  }

  const starDetailsArray = [
    ...(completeStars ? [...Array(completeStars)].map(() => 'complete'): []),
    ...(halfStar ? [...Array(halfStar)].map(() => 'half') : []),
    ...(emptyStars ? [...Array(emptyStars)].map(() => 'empty') : []),
    showSubText && rating,
  ];

  return (
    <View style={styles.container}>
      {starDetailsArray.map((item, index) => (
        <Star style={style} type={item} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ratings;
