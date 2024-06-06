import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {ComponentType} from 'react';
import {Layout} from 'react-native-tab-view/lib/typescript/src/types';

export enum MainFooter {
  HOME = 'Home',
  MACTHES = 'Matches',
  VIDEOS = 'Videos',
  NEWS = 'News',
  MORE = 'More',
}

export enum HomeTabs {
  FEATURED = 'FEATURED',
  CRIC_PREMIUM = 'CRIC PREMIUM',
}

export enum MatchesTab {
  LIVE = 'LIVE',
  UPCOMING = 'UPCOMING',
  RECENT = 'RECENT',
}

export enum NewsTabs {
  ALL_STORIES = 'ALL STORIES',
  PREMIUM_EDITORIALS = 'PREMIUM EDITORIALS',
  CATEGORIES = 'CATEGORIES',
  TOPICS = 'TOPICS',
}

export type TTabs = HomeTabs | MatchesTab | NewsTabs;

export type TExcludedTabFooterTypes = Exclude<
  MainFooter,
  MainFooter.MORE | MainFooter.VIDEOS
>;

export interface IFooterConfigData {
  label: string;
  component: ComponentType<any>;
}

export interface IHeaderTabData {
  component: ComponentType<any>;
  name: TTabs;
}

export type TMainFooterConfig = Record<MainFooter, IFooterConfigData>;

export type TBottomNavigationParamsList = Record<MainFooter, undefined>;

export type THeaderTabConfig = Record<
  TExcludedTabFooterTypes,
  Array<IHeaderTabData>
>;

export type THomeNavigationParamsList = Record<HomeTabs, undefined>;
export type TMatchesNavigationParamsList = Record<MatchesTab, undefined>;
export type TNewsNavigationParamsList = Record<NewsTabs, undefined>;

export interface ITabRoutesData {
  key: string;
  title: string;
}

export interface IHeaderProps {
  layout: Layout;
  options: BottomTabNavigationOptions;
  route: RouteProp<ParamListBase>;
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>;
}

export interface ISelectedTab {
  routeName: TExcludedTabFooterTypes;
  tabName: TTabs;
}

export type TTabToView<T extends TTabs> = {
  [key in T]: () => React.JSX.Element;
};
