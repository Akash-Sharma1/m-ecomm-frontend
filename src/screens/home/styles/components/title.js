import { StyleSheet } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

const homeTitleStyles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Sizes.PADDING,
    alignItems: 'center',
  },
  titleText: {
    ...Fonts.BOLD,
    ...Fonts.TITLE,
    color: Colors.DEFAULT_FONT_COLOR,
  },
});

export default homeTitleStyles;
