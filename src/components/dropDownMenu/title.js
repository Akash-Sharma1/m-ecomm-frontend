import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Fonts, Sizes } from 'styles';
import { TITLE_TYPES } from './utils';


const DropDownPopoverTitle = ({
  titleType,
  triggerProps,
  isOpen,
  placeholder,
  title,
  selectedItem,
}) => {
  const label = title || selectedItem || placeholder;

  const TitleContent = () => {
    if (titleType === TITLE_TYPES.MENU) {
      return (
        <Ionicons name="ellipsis-vertical" style={styles.icon} />
      );
    } else if (titleType === TITLE_TYPES.SELECT) {
      if (isOpen) {
        return (
          <>
            {label && <Text style={styles.text}>{label}</Text>}
            <Ionicons name="chevron-up" style={styles.icon} />
          </>
        );
      } else {
        return (
          <>
            {label && <Text style={styles.text}>{label}</Text>}
            <Ionicons name="chevron-down" style={styles.icon} />
          </>
        );
      }
    } else return null;
  };

  return (
    <Pressable
      {...triggerProps}
      style={styles.container}
    >
      <TitleContent />
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Sizes.RADIUS,
    padding: Sizes.PADDING,
  },
  text: {
    ...Fonts.H3,
    paddingRight: Sizes.size(5),
  },
  icon: {
    ...Fonts.H1,
  },
});

export default DropDownPopoverTitle;
