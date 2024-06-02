import HomeScreen from '../../Screens/HomeScreen';
import MatchesScreen from '../../Screens/MatchesScreen';
import MoreScreen from '../../Screens/More';
import NewsScreen from '../../Screens/NewsScreen';
import VideosScreen from '../../Screens/VideosScreen';
import {MainFooter, TMainFooterConfig} from '../common/data';
import HomeIcon from 'react-native-vector-icons/Entypo';
import MatchesIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import VideosIcon from 'react-native-vector-icons/AntDesign';
import NewsIcon from 'react-native-vector-icons/Entypo';
import MenuIcon from 'react-native-vector-icons/Entypo';
import {ReactNode} from 'react';

export const mainFooterConfig: TMainFooterConfig = {
  [MainFooter.HOME]: {
    label: 'Home',
    component: HomeScreen,
  },
  [MainFooter.MACTHES]: {
    label: 'Matches',
    component: MatchesScreen,
  },
  [MainFooter.VIDEOS]: {
    label: 'Videos',
    component: VideosScreen,
  },
  [MainFooter.NEWS]: {
    label: 'News',
    component: NewsScreen,
  },
  [MainFooter.MORE]: {
    label: 'More',
    component: MoreScreen,
  },
};

export const mainFooterDisplayConfig: Record<
  MainFooter,
  {icon: ReactNode; label?: string; navigateTo?: MainFooter}
> = {
  [MainFooter.HOME]: {
    icon: <HomeIcon name="home" size={20} />,
    navigateTo: MainFooter.HOME,
  },
  [MainFooter.MACTHES]: {
    icon: <MatchesIcon name="baseball-bat" size={20} />,
    navigateTo: MainFooter.MACTHES,
  },
  [MainFooter.VIDEOS]: {
    icon: <VideosIcon name="playcircleo" size={20} />,
    navigateTo: MainFooter.VIDEOS,
  },
  [MainFooter.NEWS]: {
    icon: <NewsIcon name="news" size={20} />,
    navigateTo: MainFooter.NEWS,
  },
  [MainFooter.MORE]: {
    icon: <MenuIcon name="dots-three-vertical" size={20} />,
    navigateTo: MainFooter.MORE,
  },
};
