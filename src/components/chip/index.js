import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

const Chip = ({
  label,
  onClick,
  active = false,
  containerStyle,
  style,
}) => {
  const [isSelected, setSelected] = useState(active);

  const handleClick = useCallback(() => {
    setSelected((prev) => !prev);
    onClick && onClick(!isSelected);
  }, [onClick, isSelected]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected ? styles.isActive : {},
        containerStyle,
      ]}
      onClick={handleClick}
      activeOpacity={!onClick}
    >
      <Text
        style={[
          styles.text,
          isSelected ? styles.isActiveText : {},
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
