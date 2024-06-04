import {ComponentType} from 'react';

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
  name: HomeTabs | MatchesTab | NewsTabs;
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
