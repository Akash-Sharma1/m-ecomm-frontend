import Colors from './colors';
import Sizes from './sizes';


// FONT FAMILY
// const FONT_FAMILY_REGULAR = 'Montserrat-Black';
const FONT_FAMILY_BOLD_1 = 'Montserrat-Bold';
const FONT_FAMILY_BOLD_2 = 'Montserrat-Black';

// FONT WEIGHT
// const FONT_WEIGHT_REGULAR = '400';
// const FONT_WEIGHT_BOLD = '700';

const commonFontStyle = {
  // fontFamily: FONT_FAMILY_REGULAR,
  // fontWeight: FONT_WEIGHT_REGULAR,
  color: Colors.DEFAULT_FONT_COLOR,
};


export default {
  LARGE_TITLE: {
    ...commonFontStyle,
    fontSize: Sizes.LARGE_TITLE,
  },
  TITLE: {
    ...commonFontStyle,
    fontSize: Sizes.TITLE,
  },

  H1: {
    ...commonFontStyle,
    fontSize: Sizes.H1,
  },
  H2: {
    ...commonFontStyle,
    fontSize: Sizes.H2,
  },
  H3: {
    ...commonFontStyle,
    fontSize: Sizes.H3,
  },
  H4: {
    ...commonFontStyle,
    fontSize: Sizes.H4,
  },
  H5: {
    ...commonFontStyle,
    fontSize: Sizes.H5,
  },
  H6: {
    ...commonFontStyle,
    fontSize: Sizes.H6,
  },

  BODY: {
    ...commonFontStyle,
    fontSize: Sizes.H4,
  },

  BOLD: {
    ...commonFontStyle,
    fontFamily: FONT_FAMILY_BOLD_1,
  },
  BOLD_2: {
    ...commonFontStyle,
    fontFamily: FONT_FAMILY_BOLD_2,
  },
  // FONT_WEIGHT_REGULAR,
  // FONT_WEIGHT_BOLD,
};
