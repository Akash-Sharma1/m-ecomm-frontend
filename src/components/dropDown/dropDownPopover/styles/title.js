import { StyleSheet } from 'react-native';

import { Colors, Sizes } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Sizes.H5,
  },
  icon: {
    color: Colors.GRAY_DARK,
    fontSize: Sizes.H5,
    paddingHorizontal: Sizes.PADDING_2,
  },
});
