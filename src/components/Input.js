import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input as NativeBaseInput } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Fonts, Sizes } from 'styles';

const Input = ({
  value='',
  onChange,
  onSubmit,
  containerStyle,
  style,
  placeholder='Search',
  rightIconName='search',
  rightIcon=true,
}) => {
  const [text, setText] = useState(value);

  const handleChange = useCallback((val) => {
    onChange && onChange(val);
    setText(val);
  }, [onChange]);

  const handleSubmit = useCallback(() => {
    onSubmit && onSubmit(text);
  }, [text, onSubmit]);

  return (
    <View style={[styles.container, containerStyle]}>
      <NativeBaseInput
        variant="rounded"
        InputRightElement={rightIcon ? (
          <TouchableOpacity onPress={handleSubmit}>
            <Ionicons name={rightIconName} style={styles.icon} />
          </TouchableOpacity>
        ) : null}
        style={[styles.input, style]}
        onChangeText={handleChange}
        placeholder={placeholder}
        value={text}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: Sizes.RADIUS_2,
    flex: 1,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    ...Fonts.H4,
    ...Fonts.BOLD,
  },
  icon: {
    padding: Sizes.PADDING,
    ...Fonts.H4,
  },
});
