import { Platform } from 'react-native';
import Sizes from './sizes';

// COMPONENTS > TOPBAR
// eslint-disable-next-line max-len
const TOP_BAR_HEIGHT = Platform.OS == 'android' ? Sizes.size(40 + 30) + Sizes.STATUS_BAR_SIZE : Sizes.size(40 + 30);
const TOP_BAR_Z_INDEX = 9;

// COMPONENT > BANNER
const BANNER_HEIGHT = Sizes.size(110);

// FOOTER
const FOOTER_HEIGHT = Sizes.size(70);

// COMMON
const SCREEN_CONTAINER = {
  marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  marginBottom: Platform.OS === 'ios' ? Sizes.size(70) : Sizes.size(90),
  flex: 1,
};

export default {
  TOP_BAR_HEIGHT,
  TOP_BAR_Z_INDEX,
  BANNER_HEIGHT,
  SCREEN_CONTAINER,
  FOOTER_HEIGHT,
};
