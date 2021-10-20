import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Star from './Star';

const StarList = ({
  style, starDetailsArray,
}) => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      horizontal
      data={starDetailsArray}
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
});

export default StarList;
