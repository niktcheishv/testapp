import {ListRenderItem} from 'react-native';

export type CategoryItemProps = {
  item: Category;
};

export type RenderItem = ListRenderItem<Category>;

export type Category = {
  category: string;
  default: boolean;
};

export type Profile = {
  agreedToTerms: boolean;
  categories: string[];
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export type User = {
  id: string;
  profile: Profile;
};
