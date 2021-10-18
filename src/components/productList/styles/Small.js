import { StyleSheet } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';


export default StyleSheet.create({
  container: {
    marginBottom: Sizes.MARGIN,
    flex: 1,
    marginHorizontal: Sizes.PADDING,
    justifyContent: 'center',
  },
  image: {

  },
  detailsContainer: {
    alignItems: 'center',
  },
  title: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.PRIMARY,
  },
  price: {

  },
  ratingContainer: {

  },
});
