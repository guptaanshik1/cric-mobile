import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from 'react-native-vector-icons/Ionicons';
import {globalPadding, headerHeight} from '../utils/common/commonStyles';

const MainHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftPart}>
        <Logo name="tennisball" size={30} />
        <Text style={styles.logoText}>CricInfo</Text>
      </View>
      <Pressable style={styles.loginContainer}>
        <Text style={styles.loginText}>Log In</Text>
      </Pressable>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  headerContainer: {
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: globalPadding,
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    height: headerHeight,
  },
  leftPart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
  },
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 25,
    backgroundColor: 'none',
    padding: 10,
    width: 80,
  },
  loginText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
