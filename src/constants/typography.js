import { Dimensions } from 'react-native';
import { scaleFont } from 'styles/common/mixins';

const { width, height } = Dimensions.get('window');

// FONT FAMILY
const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
const FONT_FAMILY_BOLD = 'OpenSans-Bold';

// FONT WEIGHT
const FONT_WEIGHT_REGULAR = '400';
const FONT_WEIGHT_BOLD = '700';

// LINE HEIGHT
const LINE_HEIGHT_22 = scaleFont(22);
const LINE_HEIGHT_30 = scaleFont(30);
const LINE_HEIGHT_36 = scaleFont(36);

const Sizes = {
  // global sizes
  BASE: scaleFont(8),
  DEFAULT_FONT: scaleFont(14),

  RADIUS: scaleFont(30),
  RADIUS2: scaleFont(60),

  PADDING: scaleFont(10),
  PADDING_2: scaleFont(12),

  MARGIN: scaleFont(10),
  MARGIN_2: scaleFont(12),

  // font sizes
  LARGE_TITLE: scaleFont(50),

  H1: scaleFont(30),
  H2: scaleFont(22),
  H3: scaleFont(20),
  H4: scaleFont(18),
  H5: scaleFont(14),
  H6: scaleFont(12),

  BODY_1: scaleFont(30),
  BODY_2: scaleFont(20),
  BODY_3: scaleFont(16),
  BODY_4: scaleFont(14),
  BODY_5: scaleFont(12),

  // app dimensions
  width,
  height,
};

const Fonts = {
  LARGE_TITLE: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: Sizes.LARGE_TITLE,
    lineHeight: 55,
  },

  H1: {
    fontFamily: 'Roboto-Black',
    fontSize: Sizes.H1,
    lineHeight: LINE_HEIGHT_36,
  },
  H2: {
    fontFamily: 'Roboto-Bold',
    fontSize: Sizes.H2,
    lineHeight: LINE_HEIGHT_30,
  },
  H3: {
    fontFamily: 'Roboto-Bold',
    fontSize: Sizes.H3,
    lineHeight: LINE_HEIGHT_22,
  },
  H4: {
    fontFamily: 'Roboto-Bold',
    fontSize: Sizes.H4,
    lineHeight: LINE_HEIGHT_22,
  },

  BODY_1: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: Sizes.BODY_1,
    lineHeight: LINE_HEIGHT_36,
  },
  BODY_2: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    fontSize: Sizes.BODY_2,
    lineHeight: LINE_HEIGHT_30,
  },
  BODY_3: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    fontSize: Sizes.BODY_3,
    lineHeight: LINE_HEIGHT_22,
  },
  BODY_4: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    fontSize: Sizes.BODY_4,
    lineHeight: LINE_HEIGHT_22,
  },
  BODY_5: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    fontSize: Sizes.BODY_5,
    lineHeight: LINE_HEIGHT_22,
  },

  BOLD: {
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_BOLD,
  },
};

export { Sizes, Fonts };
