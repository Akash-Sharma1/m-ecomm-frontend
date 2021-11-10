import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors, Mixins, Sizes } from 'styles';
import { Attach, VoiceInput } from 'actions';
import { ClickableIcon, Input } from 'components';
import { useSelector } from 'react-redux';

const ChatFooter = () => {
  const [text, setText] = useState('');
  const accentColorIndex = useSelector((state) => state.general.accentColorIndex);

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
          style={Mixins.populateStyleProperty('color', Colors.SOLID_PALLATE, accentColorIndex)}
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
