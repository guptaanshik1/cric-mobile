import {HomeTabs, TTabToView} from '../../../../utils/common/data';
import {CricPremium} from '../../CricPremium';
import {Featured} from '../../Featured';

export const tabToViewMapper: TTabToView<HomeTabs> = {
  [HomeTabs.FEATURED]: Featured,
  [HomeTabs.CRIC_PREMIUM]: CricPremium,
};
