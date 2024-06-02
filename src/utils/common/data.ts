import {ComponentType} from 'react';

export enum MainFooter {
  HOME = 'Home',
  MACTHES = 'Matches',
  VIDEOS = 'Videos',
  NEWS = 'News',
  MORE = 'More',
}

export interface IFooterConfigData {
  label: string;
  component: ComponentType<any>;
}

export type TMainFooterConfig = Record<MainFooter, IFooterConfigData>;

export type TBottomNavigationParamsList = Record<MainFooter, undefined>;
