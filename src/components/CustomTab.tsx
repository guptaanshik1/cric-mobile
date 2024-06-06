import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {
  NavigationState,
  Route,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';
import {headerBgColor} from '../utils/common/commonStyles';

type TProps = SceneRendererProps & {navigationState: NavigationState<Route>};

const CustomTab = ({...props}: TProps) => {
  return (
    <TabBar
      renderLabel={({route}) => {
        return <Text style={styles.label}>{route?.title}</Text>;
      }}
      style={styles.tabContainer}
      scrollEnabled={true}
      indicatorStyle={styles.indicator}
      tabStyle={styles.tabBar}
      {...props}
    />
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: headerBgColor,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 0,
    justifyContent: 'center',
  },
  indicator: {backgroundColor: '#FFFFFF'},
  label: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18,
  },
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
});
