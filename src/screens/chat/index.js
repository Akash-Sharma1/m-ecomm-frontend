import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Colors, Sizes } from 'styles';
import { Header } from 'components';

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginContainer}>
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
