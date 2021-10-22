import React from 'react';
import { FlatList } from 'react-native';

const generateUniqueString = () => (
  (Math.random() + 1).toString(36).substring(2)
);

const List = ({ data, renderitem, key, ...remainingProps }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderitem}
      keyExtractor={(_, index) => index.toString()}
      listKey={`${key}-${generateUniqueString()}`}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...remainingProps}
    />
  );
};

export default List;
