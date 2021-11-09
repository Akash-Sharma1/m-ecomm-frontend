// import React, { useCallback } from 'react';
import React from 'react';

import ClickableIcon from '../../../components/ClickableIcon';
// import { useNavigation } from '@react-navigation/core';

const Attach = ({ containerStyle, style }) => {
  // const navigation = useNavigation();

  // const handlePress = useCallback(() => {
  //   navigation.canGoBack() && navigation.goBack();
  // }, [navigation]);

  return (
    <ClickableIcon
      containerStyle={containerStyle}
      style={style}
      iconName="ios-attach-sharp"
    />
  );
};

export default Attach;
