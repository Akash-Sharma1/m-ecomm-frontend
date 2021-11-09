import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts, Sizes } from 'styles';
import { Bookmark, GoBack } from 'actions';
import DropDownMenu from '../dropDownMenu';

const Header = ({
  label,
  enableGoBack,
  enableBookmark,
  enableMenu,
  menuProps, // used for menu
  productId, // used for bookmark
  leftItems,
  rightItems,
  middleitems,
  isAbsolute,
  containerStyle,
  iconStyle,
}) => {
  return (
    <View style={[styles.container, isAbsolute && styles.absoluteContainer, containerStyle]}>
      <View style={styles.itemsContainer}>
        {enableGoBack && <GoBack containerStyle={iconStyle} />}
        <Text style={styles.title}>{label}</Text>
        {leftItems}
      </View>

      <View style={styles.itemsContainer}>
        {middleitems}
      </View>

      <View style={styles.itemsContainer}>
        {rightItems}
        {enableBookmark && (
          <Bookmark containerStyle={iconStyle} productId={productId} />
        )}
        {enableMenu && (
          <DropDownMenu {...menuProps} />
        )}
      </View>
    </View>
  );
};

export default Header;

const HEADER_HEIGHT = Sizes.size(50);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEADER_HEIGHT,
  },
  absoluteContainer: {
    position: 'absolute',
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...Fonts.H1,
    ...Fonts.BOLD,
  },
});
