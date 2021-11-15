import React, { useCallback, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Fonts, Sizes } from 'styles';

const ICON_PLACEMENT = { right: 'right', left: 'left' };

const Input = ({
  value='',
  onChange,
  onSubmit,
  containerStyle,
  style,
  placeholder='Search',
  rightIconName='search',
  enableIcon=true,
  iconPlacement=ICON_PLACEMENT.right,
  ...remainingProps
}) => {
  const [text, setText] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const setFocusOn = useCallback(() => {
    setIsFocused(true);
  }, []);

  const setFocusOff = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleChange = useCallback((val) => {
    onChange && onChange(val);
    setText(val);
  }, [onChange]);

  const handleSubmit = useCallback(() => {
    setFocusOff();
    onSubmit && onSubmit(text);
  }, [text, onSubmit, setFocusOff]);

  return (
    <View style={[
      styles.container,
      containerStyle,
    ]}>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.focused,
          iconPlacement === ICON_PLACEMENT.right ? styles.paddingRight : styles.paddingLeft,
          style,
        ]}
        onChangeText={handleChange}
        placeholder={placeholder}
        value={text}
        onFocus={setFocusOn}
        onBlur={setFocusOff}
        onSubmit={handleSubmit}
        spellCheck={false}
        autoCorrect={false}
        {...remainingProps}
      />

      {enableIcon && (
        <TouchableOpacity onPress={handleSubmit}>
          <Ionicons name={rightIconName} style={[
            styles.icon,
            iconPlacement === ICON_PLACEMENT.right ? styles.alignIconRight : styles.alignIconLeft,
          ]} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: Sizes.RADIUS_2,
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    ...Fonts.H5,
    ...Fonts.BOLD,
    paddingLeft: 2 * Sizes.PADDING,
    paddingRight: 2 * Sizes.PADDING,
    paddingVertical: Sizes.PADDING,
    borderWidth: Sizes.size(1),
    borderRadius: Sizes.RADIUS_2,
    borderColor: Colors.GRAY_LIGHT,
  },
  icon: {
    position: 'absolute',
    padding: Sizes.PADDING,
    ...Fonts.H4,
  },
  paddingLeft: {
    paddingLeft: Sizes.size(40),
  },
  paddingRight: {
    paddingRight: Sizes.size(40),
  },
  alignIconRight: {
    right: 0,
  },
  alignIconLeft: {
    left: 0,
  },
  focused: {
    borderColor: Colors.SECONDARY,
  },
});
