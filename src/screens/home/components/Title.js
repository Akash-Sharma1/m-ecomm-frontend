import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { DropDownPopover } from 'components';
import styles from '../styles/components/title';
import { sortByOptions } from 'utils/constants';


const Title = () => {
  const [sortBy, setSortBy] = useState(null);

  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>Our Products</Text>
      <View>
        <DropDownPopover
          title="Sort by"
          selectedItem={sortBy}
          items={sortByOptions}
          closeOnSelect={false}
          onSelect={setSortBy}
          width="90"
        />
      </View>
    </View>
  );
};

export default Title;
