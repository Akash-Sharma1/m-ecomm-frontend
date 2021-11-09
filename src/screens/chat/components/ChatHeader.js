import React from 'react';

import { Avatar, Header } from 'components';
import { DialCall } from 'actions';
import { StyleSheet, Text } from 'react-native';

const ChatLeftHeaderItems = () => {
  return <Avatar rounded />;
};

const ChatMiddleHeaderItems = () => {
  return (
    <Text
      numberOfLines={1}
      ellipsizeMode='clip'
      style={styles.title}
    >
      Jai Shree Ram
    </Text>
  );
};

const ChatRightHeaderItems = () => {
  return (
    <>
      <DialCall rounded />
    </>
  );
};

const ChatHeader = () => {
  return (
    <Header
      enableGoBack
      enableMenu
      menuProps={{
        items: [
          { label: 'Order now', onPress: () => {} },
          { label: 'Add to cart', onPress: () => {} },
          { label: 'Close conversation', onPress: () => {} },
        ],
      }}
      leftItems={<ChatLeftHeaderItems />}
      middleItems={<ChatMiddleHeaderItems />}
      rightItems={<ChatRightHeaderItems />}
    />
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  title: {
    flex: 1,
  },
});
