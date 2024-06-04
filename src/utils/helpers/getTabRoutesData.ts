import {ITabRoutesData, TExcludedTabFooterTypes} from '../common/data';
import {homeTabConfig} from '../config/headerTabConfig';
import {indexToRouteMapper} from '../config/indexToRouteMapper';

export const getTabRoutesData = (
  currentRouteIndex: number,
): Array<ITabRoutesData> => {
  let routesData: Array<ITabRoutesData> = [];

  const footerTabs =
    homeTabConfig[
      indexToRouteMapper[currentRouteIndex] as TExcludedTabFooterTypes
    ];

  routesData = footerTabs.map(tab => ({
    key: tab.name,
    title: tab.name,
  }));

  return routesData;
};
