import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from 'react-native-vector-icons/Ionicons';
import {globalPadding, headerHeight} from '../utils/common/commonStyles';
import {Layout} from 'react-native-tab-view/lib/typescript/src/types';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import CommonTabView from './CommonTabView';

interface IProps {
  layout: Layout;
  options: BottomTabNavigationOptions;
  route: RouteProp<ParamListBase>;
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>;
}

const MainHeader = ({...props}: IProps) => {
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
      {[0, 1, 3].includes(props.navigation.getState()?.index) && (
        <CommonTabView currentRouteIndex={props.navigation.getState()?.index} />
      )}
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
