import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Colors, Sizes } from 'styles';

const Chat = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.marginContainer}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
  },
  marginContainer: {
    flex: 1,
    marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
});
