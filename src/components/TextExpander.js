import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts } from 'styles';

const UNEXPANDED_TEXT_LENGTH = 200;

const TextExpander = ({ text="", style, textStyle }) => {
  const shortText = text.substring(0, UNEXPANDED_TEXT_LENGTH);

  const [isOpen, setOpen] = useState(shortText.length === text.length);

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>
        {isOpen ? text : shortText}
        {!isOpen && '....'}
        {!isOpen && (
          <Text style={styles.readMoreText} onPress={() => setOpen(true)}>
            read more
          </Text>
        )}
      </Text>
    </View>
  );
};

export default TextExpander;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    ...Fonts.H5,
  },
  readMoreText: {
    ...Fonts.H5,
    ...Fonts.BOLD,
  },
});
