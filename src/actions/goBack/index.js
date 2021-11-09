import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';

import ClickableIcon from '../../components/ClickableIcon';

const GoBack = ({ containerStyle, style }) => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.canGoBack() && navigation.goBack();
  }, [navigation]);

  return (
    <ClickableIcon
      containerStyle={containerStyle}
      style={style}
      onPress={handlePress}
      iconName="ios-chevron-back"
    />
  );
};

export default GoBack;
