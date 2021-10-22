import React from 'react';
import { FlatList } from 'react-native';

const List = ({ data, renderitem, key, ...remainingProps }) => {
  const randomString = (Math.random() + 1).toString(36).substring(2);

  return (
    <FlatList
      data={data}
      renderItem={renderitem}
      keyExtractor={(_, index) => index.toString()}
      listKey={`${key}-${randomString}`}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...remainingProps}
    />
  );
};

export default List;
