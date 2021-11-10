import React from 'react';
import { StyleSheet, View } from 'react-native';

import Dot from './dot';

// Position can be top, bottom
const Dots = ({
  currentIndex = 0,
  totalDots = 0,
  style,
  activeStyle,
  containerStyle,
  position='bottom',
  isAbsolute,
}) => {
  return (
    <View style={[
      position === 'top' && isAbsolute && styles.moveToTop,
      position === 'bottom' && isAbsolute && styles.moveToBottom,
      isAbsolute && styles.absolute,
      styles.container,
      containerStyle,
    ]}>
      {[...Array(totalDots)].map((_, index) => (
        <Dot
          key={index}
          style={style}
          activeStyle={activeStyle}
          active={(currentIndex === (index % totalDots))}
        />
      ))}
    </View>
  );
};

export default Dots;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  absolute: {
    position: 'absolute',
  },
  moveToTop: {
    top: 0,
    width: '100%',
  },
  moveToBottom: {
    bottom: 0,
    width: '100%',
  },
});
