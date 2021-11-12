import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Mixins, Sizes } from 'styles';

const EmptyConversation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>
          No messages yet..
        </Text>

        <Text style={styles.text}>
          Send a message or speak by chosing mic option below.
        </Text>
      </View>
    </View>
  );
};

export default EmptyConversation;

const EMPTY_CONVERSATION_CARD_WIDTH = '80%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    ...Mixins.simpleShadow(),
    backgroundColor: Colors.WHITE,
    padding: 2 * Sizes.PADDING,
    width: EMPTY_CONVERSATION_CARD_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    ...Fonts.H3,
    ...Fonts.BOLD,
    paddingVertical: Sizes.PADDING / 2,
    textAlign: 'center',
  },
  text: {
    ...Fonts.H4,
    textAlign: 'center',
    paddingVertical: Sizes.PADDING / 2,
  },
});
