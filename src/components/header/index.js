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
  componentStyles={},
}) => {
  return (
    <View style={[styles.container, isAbsolute && styles.absoluteContainer, containerStyle]}>
      <View style={styles.itemsContainer}>
        {enableGoBack && <GoBack containerStyle={[
          styles.goBackIconContainer,
          componentStyles.icon,
          componentStyles.goBackContainer,
        ]} />}
        {leftItems}
        {label && (
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            style={[styles.title, componentStyles.label]}
          >
            {label}
          </Text>
        )}
      </View>

      <View style={styles.itemsContainer}>
        {middleitems}
      </View>

      <View style={styles.itemsContainer}>
        {rightItems}
        {enableBookmark && (
          <Bookmark
            containerStyle={[
              componentStyles.icon,
              componentStyles.bookmarkContainer,
            ]}
            productId={productId}
          />
        )}
        {enableMenu && (
          <DropDownMenu
            containerStyle={[
              styles.menuIconContainer,
              componentStyles.icon,
              componentStyles.menuContainer,
            ]}
            {...menuProps}
          />
        )}
      </View>
    </View>
  );
};

export default Header;

const HEADER_HEIGHT = Sizes.size(50);
const HEADER_LABEL_WIDTH = Sizes.size(220);

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
    ...Fonts.H2,
    ...Fonts.BOLD,
    paddingHorizontal: Sizes.PADDING,
    maxWidth: HEADER_LABEL_WIDTH,
  },
  goBackIconContainer: {
    paddingLeft: 0,
  },
  menuIconContainer: {
    paddingRight: 0,
  },
});
