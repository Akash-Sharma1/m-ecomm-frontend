import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Sizes } from 'styles';
import { Attach, VoiceInput } from 'actions';
import { ClickableIcon, Input } from 'components';

const ChatFooter = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Attach containerStyle={styles.attachContainer} />
      <Input
        placeholder="Message.."
        rightIcon={false}
        value={text}
        onChange={setText}
      />
      {(text && text.length) ? (
        <ClickableIcon
          containerStyle={styles.submitIconContainer}
          iconName="paper-plane"
        />
      ) : (
        <VoiceInput containerStyle={styles.voiceInputContainer} />
      )}
    </View>
  );
};

export default ChatFooter;

const CHAT_FOOTER_HEIGHT = Sizes.size(70);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: CHAT_FOOTER_HEIGHT,
    paddingHorizontal: 0,
    paddingVertical: Sizes.PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attachContainer: {
    padding: 0,
    marginRight: Sizes.MARGIN,
  },
  voiceInputContainer: {
    padding: 0,
    marginLeft: Sizes.MARGIN,
  },
  submitIconContainer: {
    padding: 0,
    marginLeft: Sizes.MARGIN,
    transform: [
      { rotate: '45deg' },
    ],
  },
});
