import React from 'react';

import { Avatar, ClickableIcon, Header } from 'components';
import { DialCall } from 'actions';
import { StyleSheet } from 'react-native';

import { Sizes } from 'styles';
import { useSelector } from 'react-redux';

const ChatLeftHeaderItems = () => {
  const accentColorIndex = useSelector((state) => state.general.accentColorIndex);
  return <Avatar rounded accentColorIndex={accentColorIndex} />;
};

const ChatRightHeaderItems = () => {
  return (
    <>
      <DialCall rounded />
      <ClickableIcon
        iconName="images"
      />
    </>
  );
};

const ChatBottomHeader = () => {
  return (
    <Header
      containerStyle={styles.container}
      label="Jai Shree Ram Ram"
      leftItems={<ChatLeftHeaderItems />}
      rightItems={<ChatRightHeaderItems />}
    />
  );
};

export default ChatBottomHeader;

const CHAT_BOTTOM_CONTAINER_HEIGHT = Sizes.size(70);

const styles = StyleSheet.create({
  container: {
    height: CHAT_BOTTOM_CONTAINER_HEIGHT,
  },
});
