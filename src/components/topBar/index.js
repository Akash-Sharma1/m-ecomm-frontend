import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
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

export default TopBar;
