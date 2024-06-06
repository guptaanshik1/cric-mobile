import {create} from 'zustand';
import {
  HomeTabs,
  ISelectedTab,
  MainFooter,
  TExcludedTabFooterTypes,
  TTabs,
} from '../common/data';

interface ITabStore {
  selectedTab: ISelectedTab;
  setSelectedTab: (selectedTab: ISelectedTab) => void;
}

export const useTabStore = create<ITabStore>((set, get) => ({
  selectedTab: {
    routeName: MainFooter.HOME as TExcludedTabFooterTypes,
    tabName: HomeTabs.FEATURED as TTabs,
  },

  setSelectedTab: (selectedTab: ISelectedTab) => {
    set({selectedTab});
  },
}));
