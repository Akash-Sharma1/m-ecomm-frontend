import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;


function dimensions(top, right = top, bottom = top, left = right, property) {
  const styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

// EXPORTS

const scaleSize = (size) => (WINDOW_WIDTH/guidelineBaseWidth) * size;

const scaleFont = (size) => size * PixelRatio.getFontScale();

const margin = (top, right, bottom, left) => {
  return dimensions(top, right, bottom, left, 'margin');
};

const padding = (top, right, bottom, left) => {
  return dimensions(top, right, bottom, left, 'padding');
};

const boxShadow = (
  color, offset = { height: 2, width: 2 }, radius = 8, opacity = 0.2,
) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
};

export default {
  scaleSize: scaleSize,
  scaleFont: scaleFont,
  margin: margin,
  padding: padding,
  boxShadow: boxShadow,
};
