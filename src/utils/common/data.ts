import {ComponentType} from 'react';

export enum MainFooter {
  HOME = 'home',
  MACTHES = 'matches',
  VIDEOS = 'videos',
  NEWS = 'news',
  MORE = 'more',
}

export interface IFooterConfigData {
  label: string;
  component: ComponentType<any>;
}

export type TMainFooterConfig = Record<MainFooter, IFooterConfigData>;

export type TBottomNavigationParamsList = Record<MainFooter, undefined>;
