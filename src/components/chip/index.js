import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import chipStyles from 'styles/components/chip';

const Chip = ({ label, onClick, styles, active = false }) => {
  const [isSelected, setSelected] = useState(active);

  const handleClick = useCallback(() => {
    setSelected((prev) => !prev);
    onClick(!isSelected);
  }, [onClick, isSelected]);

  if (onClick) {
    return (
      <TouchableOpacity
        style={[
          chipStyles.container,
          styles,
          isSelected ? chipStyles.isActive : {},
        ]}
        onClick={handleClick}
      >
        <Label label={label} />
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[chipStyles.container, styles]}>
      </View>
    );
  }
};

const Label = ({ label }) => {
  return (
    <Text>
      {label}
    </Text>
  );
};

export default Chip;
