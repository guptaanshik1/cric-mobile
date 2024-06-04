import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getTabRoutesData} from '../utils/helpers/getTabRoutesData';
import {
  HomeTabs,
  ITabRoutesData,
  MatchesTab,
  TExcludedTabFooterTypes,
} from '../utils/common/data';
import {homeTabConfig} from '../utils/config/headerTabConfig';
import {indexToRouteMapper} from '../utils/config/indexToRouteMapper';
import {SceneMap, TabView} from 'react-native-tab-view';
import CustomTab from './CustomTab';
import {Featured} from '../Screens/HomeScreen/Featured';
import {Live} from '../Screens/MatchesScreen/Live';

interface IProps {
  currentRouteIndex: number;
}

type TSceneMapData = Record<any, any>;

const CommonTabView = ({currentRouteIndex}: IProps) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  // const [routes] = useState<Array<ITabRoutesData>>(
  //   getTabRoutesData(currentRouteIndex),
  // );

  const [routes, setRoutes] = useState<Array<ITabRoutesData>>([]);
  const [sceneMap, setSceneMap] = useState<TSceneMapData>({});

  useEffect(() => {
    const newRoutes = getTabRoutesData(currentRouteIndex);
    setRoutes(newRoutes);

    const newSceneMap = newRoutes.reduce((acc, route) => {
      const component = homeTabConfig[
        indexToRouteMapper[currentRouteIndex]
      ].find(tab => tab.name === route.key)?.component;
      if (component) {
        acc[route.key] = component;
      }
      console.log({acc});
      return acc;
    }, {} as TSceneMapData);

    setSceneMap(newSceneMap);
  }, [currentRouteIndex]);

  const renderScene = SceneMap(sceneMap);

  // const getSceneMapInfoFromData = (): TSceneMapData => {
  //   const data: TSceneMapData = {} as TSceneMapData;
  //   const footerTabs =
  //     homeTabConfig[
  //       indexToRouteMapper[currentRouteIndex] as TExcludedTabFooterTypes
  //     ];

  //   footerTabs?.forEach(tab => {
  //     data[tab.name] = tab?.component;
  //   });
  //   return data;
  // };

  // const renderScene = SceneMap({...getSceneMapInfoFromData()});
  // const renderScene = SceneMap({
  //   FEATURED: Featured,
  // });

  return (
    // <View>
    //   <Text>Tabs</Text>
    // </View>
    <TabView
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      initialLayout={{width: layout.width}}
      renderTabBar={props => <CustomTab {...props} />}
    />
  );
};

export default CommonTabView;

const styles = StyleSheet.create({});
