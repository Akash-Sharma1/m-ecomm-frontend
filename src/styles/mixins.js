import { Dimensions, PixelRatio } from 'react-native';
import Colors from './colors';

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

const simpleShadow = (
  scale = 1, width = null, height = null, shadowRadius = 3.5,
) => ({
  shadowColor: Colors.GRAY_DARK,
  shadowOffset: {
    width: width !== null ? width : 0,
    height: height !== null ? height : 10,
  },
  shadowOpacity: 0.25 * scale,
  shadowRadius: shadowRadius * scale,
  elevation: 5 * scale,
});

const populateStyleProperty = (keyName, values, index) => ({
  [keyName]: values[index % values.length],
});

export default {
  scaleSize,
  scaleFont,
  margin,
  padding,
  boxShadow,
  simpleShadow,
  populateStyleProperty,
};
