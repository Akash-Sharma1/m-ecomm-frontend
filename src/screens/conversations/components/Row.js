import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Avatar, ChatTicks } from 'components';
import { OpenChat } from 'actions';
import { Colors, Fonts, Mixins, Sizes } from 'styles';

const ConverationRow = ({ conversation, style, accentColorIndex=0 }) => {
  const lastMessage = conversation.messages[0];

  return (
    <OpenChat
      containerStyle={[styles.container, style]}
      resourceId={conversation.resourceId}
      resourceType={conversation.resourceType}
      receiverName={conversation.receiverName}
    >
      <Avatar style={[styles.avatar,
        Mixins.populateStyleProperty('backgroundColor', Colors.LIGHT_PALLATE, accentColorIndex)]} />

      <View style={styles.textContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {conversation.receiverName}
          </Text>

          <ChatTicks
            message={lastMessage}
            highlightColorIndex={accentColorIndex}
            iconStyle={styles.ticks}
          />
        </View>

        <View style={styles.secondRow}>
          <Text style={styles.subtext} numberOfLines={2} ellipsizeMode="tail">
            {lastMessage.text}
          </Text>
        </View>
      </View>
    </OpenChat>
  );
};

export default ConverationRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: Sizes.RADIUS_32,
    width: Sizes.size(60),
    height: Sizes.size(60),
  },
  textContainer: {
    flex: 1,
    paddingLeft: Sizes.PADDING_2,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Sizes.size(5),
  },
  secondRow: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    textTransform: 'capitalize',
    marginRight: Sizes.size(5),
    flex: 1,
  },
  ticks: {
    color: Colors.GRAY_DARK,
  },
  subtext: {
    ...Fonts.H5,
    color: Colors.GRAY_DARK,
  },
});
