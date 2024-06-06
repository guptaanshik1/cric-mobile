import {MatchesTab, TTabToView} from '../../../utils/common/data';
import {Live} from '../Live';
import {Recent} from '../Recent';
import {Upcoming} from '../Upcoming';

export const tabToViewMapper: TTabToView<MatchesTab> = {
  [MatchesTab.LIVE]: Live,
  [MatchesTab.UPCOMING]: Upcoming,
  [MatchesTab.RECENT]: Recent,
};
