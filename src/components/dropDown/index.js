import React, { useCallback, useEffect, useState } from 'react';
import { CheckIcon, Select } from 'native-base';

import { Colors } from 'styles';

/**
 * @param {string} variant
 *  ["outline" | "rounded" | "filled" | "underlined" | "unstyled"]
 */
const DropDown = ({
  placeholder,
  items,
  selectedItem,
  isDisabled,
  onSelect,
  variant = 'outline',
  minWidth='100',
}) => {
  const [selectedValue, setSelectedValue] = useState(selectedItem);

  useEffect(() => {
    setSelectedValue(selectedItem);
  }, [selectedItem]);

  const selectItem = useCallback((toBeSelectedItem) => {
    setSelectedValue(toBeSelectedItem);
    onSelect && onSelect(toBeSelectedItem);
  }, [onSelect]);

  return (
    <Select
      selectedValue={selectedValue}
      accessibilityLabel={placeholder}
      minWidth={minWidth}
      placeholder={placeholder}
      isDisabled={isDisabled}
      _selectedItem={{
        bg: Colors.SECONDARY_MUTED,
        endIcon: <CheckIcon size="5" />,
      }}
      mt={1}
      onValueChange={selectItem}
      variant={variant}
    >
      {items.map((item, index) => (
        <Select.Item label={item} value={item} key={index} />
      ))}
    </Select>
  );
};

export default DropDown;
