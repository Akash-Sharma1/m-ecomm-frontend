import Mixins from './mixins';
import Sizes from './sizes';

const { scaleFont } = Mixins;

// FONT FAMILY
// const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
// const FONT_FAMILY_BOLD = 'OpenSans-Bold';

// FONT WEIGHT
const FONT_WEIGHT_REGULAR = '400';
const FONT_WEIGHT_BOLD = '700';

// LINE HEIGHT
const LINE_HEIGHT_22 = scaleFont(22);
const LINE_HEIGHT_30 = scaleFont(30);
const LINE_HEIGHT_36 = scaleFont(36);


export default {
  LARGE_TITLE: {
    // fontFamily: FONT_FAMILY_REGULAR,
    fontSize: Sizes.LARGE_TITLE,
    lineHeight: 55,
  },
  TITLE: {
    // fontFamily: FONT_FAMILY_REGULAR,
    fontSize: Sizes.TITLE,
    lineHeight: 55,
  },

  H1: {
    // fontFamily: 'Roboto-Black',
    fontSize: Sizes.H1,
    lineHeight: LINE_HEIGHT_36,
  },
  H2: {
    // fontFamily: 'Roboto-Bold',
    fontSize: Sizes.H2,
    lineHeight: LINE_HEIGHT_30,
  },
  H3: {
    // fontFamily: 'Roboto-Bold',
    fontSize: Sizes.H3,
    lineHeight: LINE_HEIGHT_22,
  },
  H4: {
    // fontFamily: 'Roboto-Bold',
    fontSize: Sizes.H4,
    lineHeight: LINE_HEIGHT_22,
  },

  BODY: {
    // fontFamily: 'Roboto-Bold',
    fontSize: Sizes.H4,
    lineHeight: LINE_HEIGHT_22,
    fontWeight: FONT_WEIGHT_REGULAR,
  },

  BOLD: {
    // fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_BOLD,
  },
};
