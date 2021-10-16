import { StyleSheet } from 'react-native';
import { Colors, Sizes } from 'constants';

const chipStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: Sizes.RADIUS,
  },
  isActive: {
    backgroundColor: Colors.DEFAULT_FONT_COLOR,
    color: Colors.WHITE,
  },
});

export default chipStyles;
