import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from 'constants';

export default StyleSheet.create({
  container: {
    width: Sizes.size(50),
    height: Sizes.size(50),
    backgroundColor: Colors.LIGHT_SECONDARY,
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
