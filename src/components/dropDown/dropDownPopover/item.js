import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Colors, Sizes } from 'styles';


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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Sizes.PADDING,
  },
  icon: {
    fontSize: Sizes.H5,
  },
  iconContainer: {
    width: Sizes.size(22),
  },
  text: {
    fontSize: Sizes.H5,
  },
  selected: {
    backgroundColor: Colors.SECONDARY_MUTED,
  },
});

export default DropDownPopoverItem;
