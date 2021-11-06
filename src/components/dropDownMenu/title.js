import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Colors, Sizes } from 'styles';


const DropDownPopoverTitle = ({
  triggerProps, isOpen, placeholder, title, selectedItem,
}) => {
  const label = title || selectedItem || placeholder;

  return (
    <Pressable
      {...triggerProps}
      style={styles.container}
    >
      <Text style={styles.text}>{label}</Text>
      {isOpen ? (
        <AntDesign name="up" style={styles.icon} />
      ) : (
        <AntDesign name="down" style={styles.icon} />
      )}
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Sizes.H5,
  },
  icon: {
    color: Colors.GRAY_DARK,
    fontSize: Sizes.H5,
    paddingHorizontal: Sizes.PADDING_2,
  },
});

export default DropDownPopoverTitle;
