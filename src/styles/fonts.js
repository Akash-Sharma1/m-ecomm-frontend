import Colors from './colors';
import Mixins from './mixins';
import Sizes from './sizes';

const { scaleFont } = Mixins;

// FONT FAMILY
// const FONT_FAMILY_REGULAR = 'Montserrat-Black';
const FONT_FAMILY_BOLD_1 = 'Montserrat-Bold';
const FONT_FAMILY_BOLD_2 = 'Montserrat-Black';

// FONT WEIGHT
// const FONT_WEIGHT_REGULAR = '400';
// const FONT_WEIGHT_BOLD = '700';

// LINE HEIGHT
// const LINE_HEIGHT_22 = scaleFont(22);
// const LINE_HEIGHT_30 = scaleFont(30);
// const LINE_HEIGHT_36 = scaleFont(36);

const commonFontStyle = {
  // fontFamily: FONT_FAMILY_REGULAR,
  // fontWeight: FONT_WEIGHT_REGULAR,
  color: Colors.DEFAULT_FONT_COLOR,
};


export default {
  LARGE_TITLE: {
    ...commonFontStyle,
    fontSize: Sizes.LARGE_TITLE,
    // lineHeight: 55,
  },
  TITLE: {
    ...commonFontStyle,
    fontSize: Sizes.TITLE,
    // lineHeight: 55,
  },

  H1: {
    ...commonFontStyle,
    fontSize: Sizes.H1,
    // lineHeight: LINE_HEIGHT_36,
  },
  H2: {
    ...commonFontStyle,
    fontSize: Sizes.H2,
    // lineHeight: LINE_HEIGHT_30,
  },
  H3: {
    ...commonFontStyle,
    fontSize: Sizes.H3,
    // lineHeight: LINE_HEIGHT_22,
  },
  H4: {
    ...commonFontStyle,
    fontSize: Sizes.H4,
    // lineHeight: LINE_HEIGHT_22,
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
    // lineHeight: LINE_HEIGHT_22,
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
