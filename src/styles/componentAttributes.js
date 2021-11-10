import { Platform } from 'react-native';
import Sizes from './sizes';

// COMPONENTS > TOPBAR
const TOP_BAR_HEIGHT = Sizes.size(40 + 30);
const TOP_BAR_Z_INDEX = 9;

// COMPONENT > BANNER
const BANNER_HEIGHT = Sizes.size(110);

// FOOTER
const FOOTER_HEIGHT = Sizes.size(70);

// BOTTOM_TABS
const BOTTOM_TABS_SCREEN_BOTTOM_MARGIN = Platform.OS === 'ios' ? Sizes.size(70) : Sizes.size(90);
const BOTTOM_TABS_HEIGHT = Sizes.size(80);
const BOTTOM_TABS_ABSOLUTE_BOTTOM = Platform.OS === 'ios' ? Sizes.size(25) : Sizes.size(15);

export default {
  TOP_BAR_HEIGHT,
  TOP_BAR_Z_INDEX,
  BANNER_HEIGHT,
  BOTTOM_TABS_HEIGHT,
  BOTTOM_TABS_SCREEN_BOTTOM_MARGIN,
  BOTTOM_TABS_ABSOLUTE_BOTTOM,
  FOOTER_HEIGHT,
};
