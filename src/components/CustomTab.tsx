import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {
  NavigationState,
  Route,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';
import {headerBgColor} from '../utils/common/commonStyles';
import {useTabStore} from '../utils/store/tabStore';
import {
  HomeTabs,
  ISelectedTab,
  TExcludedTabFooterTypes,
  TTabs,
} from '../utils/common/data';

type TProps = SceneRendererProps & {navigationState: NavigationState<Route>};

const CustomTab = ({...props}: TProps) => {
  const {setSelectedTab} = useTabStore();

  return (
    <TabBar
      renderLabel={({route}) => {
        return <Text style={styles.label}>{route?.title}</Text>;
      }}
      style={styles.tabContainer}
      scrollEnabled={true}
      indicatorStyle={styles.indicator}
      tabStyle={styles.tabBar}
      onTabPress={({route}) => {
        setSelectedTab({
          routeName: route?.title as TExcludedTabFooterTypes,
          tabName: props?.navigationState?.routes?.find(
            ({key}) => key === route?.key,
          )?.title as TTabs,
        });
      }}
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
