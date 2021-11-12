import React from 'react';
import { StyleSheet } from 'react-native';

import { List } from 'components';
import { Sizes } from 'styles';
import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <List
      style={styles.container}
      data={Object.keys(messages)}
      renderItem={({ item }) => (
        <Message message={messages[item]} style={styles.message} />
      )}
    />
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: Sizes.PADDING,
  },
  message: {
    marginVertical: Sizes.MARGIN,
  },
});
