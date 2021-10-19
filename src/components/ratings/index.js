import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Star from './Star';

const Ratings = ({ rating, showSubText, style }) => {
  const completeStars = Math.floor(rating);
  const emptyStarts = Math.floor(5 - rating);
  const halfStar = 5 - completeStars - emptyStarts;

  const starInfos = [
    ...[...Array(completeStars)].map(() => 'complete'),
    ...[...Array(halfStar)].map(() => 'half'),
    ...[...Array(emptyStarts)].map(() => 'empty'),
    showSubText && rating,
  ];

  return (
    <FlatList
      contentContainerStyle={styles.container}
      style={styles.list}
      horizontal
      data={starInfos}
      renderItem={({ item: starinfo }) => (
        <Star style={style} type={starinfo} />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
});

export default Ratings;
