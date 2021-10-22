import React from 'react';
import { StyleSheet } from 'react-native';

import Star from './Star';
import List from 'components/List';

const StarList = ({
  style, starDetailsArray,
}) => {
  return (
    <List
      contentContainerStyle={styles.container}
      horizontal
      data={starDetailsArray}
      renderItem={({ item: starinfo }) => (
        <Star style={style} type={starinfo} />
      )}
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
