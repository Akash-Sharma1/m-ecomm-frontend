import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts } from 'styles';
import { GoBack } from 'actions';

const HeaderActions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gobackContainer}>
        <GoBack containerStyle={styles.gobackIcon} />
        <Text style={styles.title}>Messages</Text>
      </View>
      
    </View>
  );
};

export default HeaderActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gobackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gobackIcon: {
    paddingLeft: 0,
    // paddingVertical: 1.5 * Sizes.PADDING,
  },
  title: {
    ...Fonts.H1,
    ...Fonts.BOLD,
  },
});
