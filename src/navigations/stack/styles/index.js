import { Colors, Sizes } from 'constants';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
    color: Colors.DEFAULT_FONT_COLOR,
    // ...Fonts.BODY_4,
    marginHorizontal: Sizes.PADDING,
    marginTop: Sizes.PADDING,
  },
});
