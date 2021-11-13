import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, Fonts, Sizes } from 'styles';

const Message = ({ message, style }) => {
  const accentColorIndex = useSelector((state) => state.general.accentColorIndex);

  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={[
          Colors.LIGHT_PALLATE[accentColorIndex],
          Colors.MUTED_2_PALLATE[accentColorIndex],
        ]}
        style={styles.card}
      >
        <Text style={styles.text}>
          {message.content}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default Message;

const MESSAGE_CARD_WIDTH = '80%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    width: MESSAGE_CARD_WIDTH,
    borderRadius: Sizes.RADIUS_2,
    justifyContent: 'center',
    paddingVertical: Sizes.PADDING,
    paddingHorizontal: Sizes.PADDING_2,
  },
  text: {
    ...Fonts.H4,
  },
});
