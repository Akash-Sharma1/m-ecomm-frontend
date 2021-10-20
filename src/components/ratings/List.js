import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Star from './Star';

const StarList = ({
  style, starDetailsArray, listKeyIndex,
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
      listKeyIndex={`ratings-${listKeyIndex}`}
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
