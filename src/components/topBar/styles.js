import { StyleSheet } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.TRANSPARENT,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Sizes.PADDING,
    marginHorizontal: Sizes.PADDING,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarTextContainer: {
    marginLeft: Sizes.size(10),
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  avatarText: {
    ...Fonts.H6,
  },
  avatarTextBold: {
    ...Fonts.H5,
    ...Fonts.BOLD,
  },
  search: {
    fontSize: Sizes.H1,
    color: Colors.DEFAULT_FONT_COLOR,
  },
});
