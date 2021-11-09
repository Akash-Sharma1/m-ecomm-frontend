import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Colors, Sizes } from 'styles';
import { Header, Input, List } from 'components';
import { fetchConversations } from 'store/reducers/chats';
import ConverationRow from './components/Row';

const Conversations = () => {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.chats.conversations);

  useEffect(() => {
    dispatch(fetchConversations());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginContainer}>
        <Header label="Messages" />
        <Input
          containerStyle={styles.search}
        />
        <View style={styles.conversations}>
          <List
            data={conversations}
            renderItem={({ item, index }) => (
              <ConverationRow
                conversation={item}
                style={styles.conversation}
                accentColorIndex={index}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Conversations;

const SEARCH_BAR_HEIGHT = Sizes.size(41);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
  },
  marginContainer: {
    flex: 1,
    marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
  search: {
    marginTop: Sizes.MARGIN,
    height: SEARCH_BAR_HEIGHT,
    flex: 0,
  },
  conversations: {
    flex: 1,
    marginTop: Sizes.MARGIN_2,
  },
  conversation: {
    flex: 1,
    marginTop: 2 * Sizes.MARGIN,
  },
});
