import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors, Sizes } from 'styles';
import { Bookmark, GoBack } from 'actions';

const HeaderActions = () => {
  return (
    <View style={styles.container}>
      <GoBack containerStyle={styles.goback} />
      <Bookmark style={styles.bookmark} />
    </View>
  );
};

export default HeaderActions;

const styles = StyleSheet.create({
  goback: {
    backgroundColor: Colors.TRANSPARENT,
    padding: 2 * Sizes.PADDING,
  },
  bookmark: {
    backgroundColor: Colors.TRANSPARENT,
    padding: 2 * Sizes.PADDING,
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
