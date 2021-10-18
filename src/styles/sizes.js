import { Dimensions } from 'react-native';
import Mixins from './mixins';

const { scaleFont } = Mixins;
const { width, height } = Dimensions.get('window');

export default {
  // global sizes
  BASE: scaleFont(8),
  DEFAULT_FONT_SIZE: scaleFont(14),

  RADIUS: scaleFont(10),
  RADIUS2: scaleFont(30),

  PADDING: scaleFont(10),
  PADDING_2: scaleFont(12),

  MARGIN: scaleFont(10),
  MARGIN_2: scaleFont(12),

  // font sizes
  LARGE_TITLE: scaleFont(30),
  TITLE: scaleFont(24),

  H1: scaleFont(24),
  H2: scaleFont(22),
  H3: scaleFont(20),
  H4: scaleFont(18),
  H5: scaleFont(14),
  H6: scaleFont(12),

  // app dimensions
  width,
  height,
  size: (size) => scaleFont(size),
};
