import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from 'react-native-vector-icons/Ionicons';
import {globalPadding, headerHeight} from '../utils/common/commonStyles';

const MainHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.upperPart}>
        <View style={styles.leftPart}>
          <Logo name="tennisball" size={30} />
          <Text style={styles.logoText}>CricInfo</Text>
        </View>
        <Pressable style={styles.loginContainer}>
          <Text style={styles.loginText}>Log In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  headerContainer: {
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgreen',
    height: headerHeight,
  },
  upperPart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: globalPadding,
    alignItems: 'center',
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
    color: '#ffffff',
  },
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 25,
    backgroundColor: 'none',
    padding: 6,
    width: 80,
    height: 40,
  },
  loginText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
});
