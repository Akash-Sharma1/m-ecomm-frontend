import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

const Chip = ({
  label,
  onPress,
  selected,
  containerStyle,
  style,
}) => {
  const handleClick = useCallback(() => {
    onPress && onPress(label);
  }, [onPress, label]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected ? styles.isActive : {},
        containerStyle,
      ]}
      onPress={handleClick}
      activeOpacity={!onPress}
    >
      <Text
        style={[
          styles.text,
          selected ? styles.isActiveText : {},
          style,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.GREY_MEDIUM,
    borderWidth: Sizes.size(1),
    borderRadius: Sizes.RADIUS,
    paddingHorizontal: Sizes.size(6),
    paddingVertical: Sizes.size(5),
  },
  isActive: {
    backgroundColor: Colors.DEFAULT_FONT_COLOR,
  },
  isActiveText: {
    color: Colors.WHITE,
  },
  text: {
    ...Fonts.H5,
  },
});

export default Chip;
