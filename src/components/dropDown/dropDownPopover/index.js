import React, { useCallback, useState } from 'react';
import { Menu } from 'native-base';

import DropDownPopoverItem from './item';
import DropDownPopoverTitle from './title';


/**
 * @param {string} title parmanent title to display
 * @param {string} placeholder text to display when nothing selected
 * @param {boolean} closeOnSelect
 * @param {string} placement
 * @param {boolean} enableSelectionToggle makes double tap deselect selection
 *  top" | "right" | "bottom" | "left" | "top left" | "top right" |
 *  "bottom left" | "bottom right" | "right top" | "right bottom" |
 *  "left top" | "left bottom"
 */
const DropDownPopover = ({
  placeholder='down',
  closeOnSelect=true,
  title,
  items,
  selectedItem,
  selectionToggleEnabled=true,
  placement,
  onSelect,
  width='100',
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleSelection = useCallback((value) => {
    if (selectionToggleEnabled && selectedItem === value) {
      onSelect(null);
    } else {
      onSelect(value);
    }
  }, [onSelect, selectionToggleEnabled, selectedItem]);

  return (
    <Menu
      isOpen={isOpen}
      closeOnSelect={closeOnSelect}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      minWidth={width}
      placement={placement}
      trigger={(triggerProps) => (
        <DropDownPopoverTitle
          triggerProps={triggerProps}
          isOpen={isOpen}
          placeholder={placeholder}
          title={title}
          selectedItem={selectedItem}
        />
      )}
    >
      {items && items.map((item, index) => (
        <DropDownPopoverItem
          key={index}
          handlePress={handleSelection}
          label={item}
          selected={selectedItem === item}
        />
      ))}
    </Menu>
  );
};

export default DropDownPopover;
