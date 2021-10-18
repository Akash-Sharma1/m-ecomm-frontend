import { StyleSheet } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

const homeTitleStyles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Sizes.PADDING,
    alignItems: 'center',
    marginHorizontal: Sizes.PADDING,
  },
  titleText: {
    ...Fonts.TITLE,
    ...Fonts.BOLD,
  },
});

export default homeTitleStyles;
