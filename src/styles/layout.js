import { StyleSheet } from 'react-native';

const Layout = StyleSheet.create({
  flexCol: {
    flex: 1,
    flexDirection: 'column',
  },

  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },

  flexJC: {
    flex: 1,
    justifyContent: 'center',
  },

  flexAC: {
    flex: 1,
    alignItems: 'center',
  },

  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Layout;
