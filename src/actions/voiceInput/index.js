import React from 'react';

import ClickableIcon from '../../components/ClickableIcon';

const VoiceInput = ({ containerStyle, style }) => {
  return (
    <ClickableIcon
      containerStyle={containerStyle}
      style={style}
      iconName="mic-outline"
    />
  );
};

export default VoiceInput;
