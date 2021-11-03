import React from 'react';
import { FlatList } from 'react-native';

const List = ({
  data = [],
  renderItem = () => null,
  key,
  ...remainingProps
}, ref) => {
  const randomString = (Math.random() + 1).toString(36).substring(2);

  return (
    <FlatList
      ref={ref}
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      listKey={`${key}-${randomString}`}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...remainingProps}
    />
  );
};

export default React.forwardRef(List);
