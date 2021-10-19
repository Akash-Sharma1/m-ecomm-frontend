import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Fonts, Sizes } from 'styles';
import Avatar from '../avatar';

const TopBar = ({ navigation, contents }) => {
  const fullName = 'Akash Sharma'; // TODO: Change Later

  return (
    <View style={styles.container}>
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

      <TouchableOpacity
        onPress={navigation.openDrawer}
      >
        <Ionicons name="search" style={styles.search} />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.TRANSPARENT,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarTextContainer: {
    marginLeft: Sizes.size(10),
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  avatarText: {
    ...Fonts.H6,
  },
  avatarTextBold: {
    ...Fonts.H5,
    ...Fonts.BOLD,
  },
  search: {
    fontSize: Sizes.H1,
    color: Colors.DEFAULT_FONT_COLOR,
  },
});

export default TopBar;
