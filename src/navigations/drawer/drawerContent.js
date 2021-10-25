import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { Routes } from 'constants';
import { TopBar } from 'components';
import { Fonts, Sizes } from 'styles';

const Links = [
  { label: 'Home', route: Routes.HOME, icon: 'home' },
  { label: 'Chat', route: Routes.CHAT, icon: 'chat' },
  { label: 'Categories', route: Routes.CATEGORIES, icon: 'view-day' },
  { label: 'Cart', route: Routes.CART, icon: 'cart' },
  { label: 'Order History', route: Routes.ORDER_HISTORY, icon: 'receipt' },
  { label: 'Accounts', route: Routes.ACCOUNTS, icon: 'account-circle' },
];

const DrawerContent = (props) => {
  const isLoggedIn = false; // TODO: AUTOMATE

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <TopBar avatar/>
      </View>

      <DrawerContentScrollView
        style={styles.scrollContainer}
        {...props}
        crollEnabled={false}
      >
        {Links.map(({ label, route, icon }, index) => (
          <DrawerItem
            key={index}
            label={({ color }) => (
              <View style={styles.itemContainer}>
                <MaterialCommunityIcons style={styles.icon} name={icon} />
                <Text style={[{ color }, styles.text]}>{label}</Text>
              </View>
            )}
            onPress={() => props.navigation.navigate(route)}
          />
        ))}
      </DrawerContentScrollView>

      {isLoggedIn ? (
        <DrawerItem
          label={({ color }) => (
            <View style={styles.itemContainer}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="logout-variant"
              />
              <Text style={[{ color }, styles.text]}>Logout</Text>
            </View>
          )}
        />
      ) : (
        <>
          <DrawerItem
            label={({ color }) => (
              <View style={styles.itemContainer}>
                <Feather
                  style={styles.icon}
                  name="user-plus"
                />
                <Text style={[{ color }, styles.text]}>Sign Up</Text>
              </View>
            )}
          />

          <DrawerItem
            label={({ color }) => (
              <View style={styles.itemContainer}>
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="login-variant"
                />
                <Text style={[{ color }, styles.text]}>Login</Text>
              </View>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  item: {
    padding: Sizes.PADDING,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    ...Fonts.H4,
  },
  icon: {
    ...Fonts.H1,
    // ...Fonts.BOLD,
    paddingRight: Sizes.PADDING,
  },
});

export default DrawerContent;
