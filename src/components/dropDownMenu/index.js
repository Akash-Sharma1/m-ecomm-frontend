import React, { useCallback, useState } from 'react';
import { Menu } from 'native-base';

import DropDownPopoverItem from './item';
import DropDownPopoverTitle from './title';
import { SELECTION_TYPES, TITLE_TYPES } from './utils';


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
const DropDownMenu = ({
  placement='bottom',
  width='100',
  closeOnSelect=true,
  containerStyle,

  placeholder=null,
  titleType=TITLE_TYPES.MENU,
  title=null,

  items=[],
  itemsSelectable=false,
  doubleClickSelectToggle=true,
  selectionType=SELECTION_TYPES.RADIO,
  onSelect,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelection = useCallback((clickedItem) => {
    const { label, onPress } = clickedItem;
    const isSelected = selectedItems.includes(label);

    if (itemsSelectable === false) {
      onSelect && onSelect(label);
      onPress && onPress();
    } else {
      if (doubleClickSelectToggle && isSelected) {
        const itemsExceptCurrentlyClickedItem = selectedItems.filter((selectedItem) => (
          selectedItem !== label
        ));

        setSelectedItems(itemsExceptCurrentlyClickedItem);
        onSelect && onSelect(itemsExceptCurrentlyClickedItem);
        onPress && onPress({ isSelected: false });
      } else if (selectionType === SELECTION_TYPES.RADIO) {
        const selectedItem = label;

        setSelectedItems([selectedItem]);
        onSelect && onSelect(selectedItem);
        onPress && onPress({ isSelected: true });
      } else if (selectionType === SELECTION_TYPES.CHECKBOX) {
        const selectedItemsWithCurrentlyClickedItem = [...selectedItems, label];

        setSelectedItems(selectedItemsWithCurrentlyClickedItem);
        onSelect && onSelect(selectedItemsWithCurrentlyClickedItem);
        onPress && onPress({ isSelected: true });
      }
    }
  }, [
    itemsSelectable,
    onSelect,
    selectedItems,
    doubleClickSelectToggle,
    selectionType,
  ]);

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
          titleType={titleType}
          title={title}
          containerStyle={containerStyle}
          selectedItem={selectedItems.length && selectedItems[0]}
        />
      )}
    >
      {items.map((item, index) => (
        <DropDownPopoverItem
          key={index}
          handlePress={() => handleSelection(item)}
          label={item.label}
          selected={selectedItems.includes(item.label)}
        />
      ))}
    </Menu>
  );
};

export default DropDownMenu;
