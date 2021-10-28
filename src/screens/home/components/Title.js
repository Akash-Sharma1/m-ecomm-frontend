import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { DropDownPopover } from 'components';
// import { sortByOptions } from 'utils/constants';
// import { Fonts, Sizes } from 'styles';
import { Fonts } from 'styles';

const Title = () => {
  // const [sortBy, setSortBy] = useState(null);

  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>Our Products</Text>
      {/* <View>
        <DropDownPopover
          title="Sort by"
          selectedItem={sortBy}
          items={sortByOptions}
          closeOnSelect={false}
          onSelect={setSortBy}
          width="90"
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    ...Fonts.TITLE,
    ...Fonts.BOLD,
  },
});

export default Title;
