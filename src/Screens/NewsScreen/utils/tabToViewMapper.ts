import {NewsTabs, TTabToView} from '../../../utils/common/data';
import {AllStories} from '../AllStories';
import {Categories} from '../Categories';
import {PremiumEditorials} from '../PremiumEditorials';
import {Topics} from '../Topics';

export const tabToViewMapper: TTabToView<NewsTabs> = {
  [NewsTabs.ALL_STORIES]: AllStories,
  [NewsTabs.CATEGORIES]: Categories,
  [NewsTabs.PREMIUM_EDITORIALS]: PremiumEditorials,
  [NewsTabs.TOPICS]: Topics,
};
