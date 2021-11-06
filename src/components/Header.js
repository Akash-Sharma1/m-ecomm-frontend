import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts, Sizes } from 'styles';
import { GoBack } from 'actions';

const Header = ({ enableGoBack, label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gobackContainer}>
        {enableGoBack && <GoBack containerStyle={styles.gobackIcon} />}
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Header;

const HEADER_HEIGHT = Sizes.size(50);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Sizes.MARGIN,
    height: HEADER_HEIGHT,
  },
  gobackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gobackIcon: {
    paddingLeft: 0,
  },
  title: {
    ...Fonts.H1,
    ...Fonts.BOLD,
  },
});
