import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles/item';


const DropDownPopoverItem = ({
  selected,
  label,
  handlePress,
}) => {
  return (
    <Pressable
      onPress={() => handlePress(label)}
      style={[
        styles.container,
        selected && styles.selected,
      ]}
    >
      <View style={styles.iconContainer}>
        {selected && (
          <AntDesign name="check" style={styles.icon} />
        )}
      </View>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default DropDownPopoverItem;
