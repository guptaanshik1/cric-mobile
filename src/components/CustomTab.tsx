import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {
  NavigationState,
  Route,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';

type TProps = SceneRendererProps & {navigationState: NavigationState<Route>};

const CustomTab = ({...props}: TProps) => {
  return (
    <TabBar
      renderLabel={({route}) => {
        console.log({route});
        return <Text style={styles.label}>{route?.title}</Text>;
      }}
      style={styles.tabBar}
      scrollEnabled={true}
      indicatorStyle={styles.indicator}
      //   onTabPress={({route}) => handleTabPress(route)}
      {...props}
    />
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  tabContainer: {},
  tabBar: {},
  indicator: {},
  label: {
    color: '#FFFFFF',
  },
});
