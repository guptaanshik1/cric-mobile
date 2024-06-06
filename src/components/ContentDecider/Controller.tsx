import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IHeaderProps} from '../../utils/common/data';
import CommonTabView from '../CommonTabView';
import {headerBgColor} from '../../utils/common/commonStyles';

const Controller = ({...props}: IHeaderProps) => {
  return (
    <View style={styles.tabsParentContainer}>
      {[0, 1, 3].includes(props.navigation.getState()?.index) && (
        <CommonTabView currentRouteIndex={props.navigation.getState()?.index} />
      )}
    </View>
  );
};

export default Controller;

export const styles = StyleSheet.create({
  tabsParentContainer: {
    flex: 1,
    backgroundColor: headerBgColor,
  },
});
