import {CricPremium} from '../../Screens/HomeScreen/CricPremium';
import {Featured} from '../../Screens/HomeScreen/Featured';
import {Live} from '../../Screens/MatchesScreen/Live';
import {Recent} from '../../Screens/MatchesScreen/Recent';
import {Upcoming} from '../../Screens/MatchesScreen/Upcoming';
import {AllStories} from '../../Screens/NewsScreen/AllStories';
import {Categories} from '../../Screens/NewsScreen/Categories';
import {PremiumEditorials} from '../../Screens/NewsScreen/PremiumEditorials';
import {Topics} from '../../Screens/NewsScreen/Topics';
import {
  HomeTabs,
  MainFooter,
  MatchesTab,
  NewsTabs,
  THeaderTabConfig,
} from '../common/data';

export const homeTabConfig: THeaderTabConfig = {
  [MainFooter.HOME]: [
    {name: HomeTabs.FEATURED, component: Featured},
    {name: HomeTabs.CRIC_PREMIUM, component: CricPremium},
  ],
  [MainFooter.MACTHES]: [
    {name: MatchesTab.LIVE, component: Live},
    {name: MatchesTab.UPCOMING, component: Upcoming},
    {name: MatchesTab.RECENT, component: Recent},
  ],
  [MainFooter.NEWS]: [
    {name: NewsTabs.ALL_STORIES, component: AllStories},
    {name: NewsTabs.PREMIUM_EDITORIALS, component: PremiumEditorials},
    {name: NewsTabs.CATEGORIES, component: Categories},
    {name: NewsTabs.TOPICS, component: Topics},
  ],
};
