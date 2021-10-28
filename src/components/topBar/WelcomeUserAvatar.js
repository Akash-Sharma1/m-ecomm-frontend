import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Fonts, Sizes } from 'styles';
import Avatar from 'components/Avatar';

const WelcomeUserAvatar = ({ navigation }) => {
  const fullName = 'Akash Sharma'; // TODO: Change Later

  return (
    <TouchableOpacity
      onPress={navigation.openDrawer}
      style={styles.avatarContainer}
    >
      <Avatar username={fullName} />
      <View style={styles.avatarTextContainer}>
        <Text style={styles.avatarText}>Welcome,</Text>
        <Text style={styles.avatarTextBold}>{fullName}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarTextContainer: {
    marginLeft: Sizes.size(10),
    flexDirection: 'column',
    justifyContent: 'center',
  },
  avatarText: {
    ...Fonts.H6,
  },
  avatarTextBold: {
    ...Fonts.H5,
    ...Fonts.BOLD,
  },
});

export default WelcomeUserAvatar;
