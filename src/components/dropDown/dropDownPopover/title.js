import React from 'react';
import { Pressable, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles/title';


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


export default DropDownPopoverTitle;
