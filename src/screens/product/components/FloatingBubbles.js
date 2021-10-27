import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Mixins, Sizes } from 'styles';
import { Ionicons } from '@expo/vector-icons';

const FloatingBubbles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.title}>7.5</Text>
        <Text style={styles.subtext}>foot</Text>
      </View>

      <View style={styles.bubble}>
        <Text style={styles.title}>A+</Text>
        <Text style={styles.subtext}>Marble</Text>
      </View>

      <View style={styles.bubble}>
        <Ionicons style={styles.icon} name="md-chatbox" />
        <Text style={styles.subtext}>Chat</Text>
      </View>
    </View>
  );
};

export default FloatingBubbles;

const BUBBLE_SIZE = Sizes.size(70);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    ...Mixins.simpleShadow(),
    // height: BUBBLE_SIZE + Sizes.size(50),
  },
  bubble: {
    borderRadius: Sizes.RADIUS_2,
    backgroundColor: Colors.WHITE,
    width: BUBBLE_SIZE,
    height: BUBBLE_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Sizes.size(5),
  },
  title: {
    ...Fonts.H3,
    ...Fonts.BOLD,
  },
  icon: {
    ...Fonts.H1,
    ...Fonts.BOLD,
  },
  subtext: {
    ...Fonts.H6,
    color: Colors.GRAY_DARK,
  },
});
