import { StyleSheet } from 'react-native';

import { Colors, Sizes } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Sizes.PADDING,
  },
  icon: {
    color: Colors.DEFAULT_FONT_COLOR,
    fontSize: Sizes.H5,
  },
  iconContainer: {
    width: Sizes.size(22),
  },
  text: {
    color: Colors.DEFAULT_FONT_COLOR,
    fontSize: Sizes.H5,
  },
  selected: {
    backgroundColor: Colors.LIGHT_SECONDARY,
  },
});
