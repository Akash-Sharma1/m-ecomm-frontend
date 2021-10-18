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
    fontSize: Sizes.H5,
  },
  iconContainer: {
    width: Sizes.size(22),
  },
  text: {
    fontSize: Sizes.H5,
  },
  selected: {
    backgroundColor: Colors.SECONDARY_MUTED,
  },
});
