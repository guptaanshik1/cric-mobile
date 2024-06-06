import {StyleSheet, View, useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getTabRoutesData} from '../utils/helpers/getTabRoutesData';
import {ITabRoutesData, TExcludedTabFooterTypes} from '../utils/common/data';
import {homeTabConfig} from '../utils/config/headerTabConfig';
import {indexToRouteMapper} from '../utils/config/indexToRouteMapper';
import {SceneMap, TabView} from 'react-native-tab-view';
import CustomTab from './CustomTab';
import {headerHeight} from '../utils/common/commonStyles';

interface IProps {
  currentRouteIndex: number;
}

type TSceneMapData = Record<any, any>;

const CommonTabView = ({currentRouteIndex}: IProps) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes, setRoutes] = useState<Array<ITabRoutesData>>([]);
  const [sceneMap, setSceneMap] = useState<TSceneMapData>({});

  useEffect(() => {
    const newRoutes = getTabRoutesData(currentRouteIndex);
    setRoutes(newRoutes);

    const newSceneMap = newRoutes.reduce((acc, route) => {
      const component = homeTabConfig[
        indexToRouteMapper[currentRouteIndex] as TExcludedTabFooterTypes
      ].find(tab => tab.name === route.key)?.component;

      if (component) {
        acc[route.key] = component;
      }
      return acc;
    }, {} as TSceneMapData);

    setSceneMap(newSceneMap);
  }, [currentRouteIndex]);

  const renderScene = SceneMap(sceneMap);

  return (
    <View style={styles.tabParentContainer}>
      <TabView
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={() => null}
        initialLayout={{width: layout.width}}
        renderTabBar={props => <CustomTab {...props} />}
      />
    </View>
  );
};

export default CommonTabView;

const styles = StyleSheet.create({
  tabParentContainer: {
    left: 0,
    right: 0,
    flex: 1,
    position: 'absolute',
  },
});
