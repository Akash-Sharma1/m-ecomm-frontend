import { StyleSheet } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

export default StyleSheet.create({
  container: {
    width: Sizes.size(50),
    height: Sizes.size(50),
    backgroundColor: Colors.SECONDARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.RADIUS,
  },
  text: {
    ...Fonts.H3,
    ...Fonts.BOLD,
  },
});
