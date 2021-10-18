import { StyleSheet } from 'react-native';

import { Colors, Sizes } from 'styles';


export default StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: Sizes.PADDING,
  },
  rounded: {
    borderRadius: Sizes.RADIUS,
  },
});
