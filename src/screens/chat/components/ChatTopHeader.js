import React from 'react';

import { Header } from 'components';


const ChatTopHeader = () => {
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
    />
  );
};

export default ChatTopHeader;
