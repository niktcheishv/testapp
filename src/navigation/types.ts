import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ADD_CATEGORY_SCREEN,
  ADD_EXPENSES_SCREEN,
  CATEGORY_SCREEN,
  EDIT_EXPENSE_SCREEN,
  HOME_SCREEN,
  HOME_STACK,
  INITIAL,
  PROFILE_SCREEN,
  PROFILE_STACK,
  SIGNIN_SCREEN,
  SIGNUP_SCREEN,
} from './ScreenNames';
import {IExpense} from 'screens/CategoryScreen/types';

export type AuthStackParamList = {
  [SIGNIN_SCREEN]: undefined;
  [SIGNUP_SCREEN]: {uid?: string; phone: string};
};

export type AppNavigatorParamList = {
  [INITIAL]: undefined;
};

export type TabParamList = {
  [HOME_STACK]: undefined;
  [PROFILE_STACK]: undefined;
};

export type HomeStackParamList = {
  [HOME_SCREEN]: undefined;
  [CATEGORY_SCREEN]: {category: string; isDefault: boolean};
  [ADD_EXPENSES_SCREEN]: {category: string; isDefault: boolean};
  [EDIT_EXPENSE_SCREEN]: {category: string; item: IExpense; isDefault: boolean};
  [ADD_CATEGORY_SCREEN]: undefined;
};

export type ProfileStackParamList = {
  [PROFILE_SCREEN]: undefined;
};

export type AppNavigatorNavigationProps<
  T extends keyof AppNavigatorParamList & string,
> = NativeStackNavigationProp<AppNavigatorParamList, T>;

export type BottomTabNavigationProps<T extends keyof TabParamList & string> =
  BottomTabNavigationProp<TabParamList, T>;

export type AuthStackNavigationProps<
  T extends keyof AuthStackParamList & string,
> = NativeStackNavigationProp<AuthStackParamList, T>;

export type HomeStackNavigationProps<
  T extends keyof HomeStackParamList & string,
> = NativeStackNavigationProp<HomeStackParamList, T>;

export type ProfileStackNavigationProps<
  T extends keyof ProfileStackParamList & string,
> = NativeStackNavigationProp<ProfileStackParamList, T>;

// router

export type AppNavigtorRouteProps<
  T extends keyof AppNavigatorParamList & string,
> = RouteProp<AppNavigatorParamList, T>;

export type BottomTabRouteProps<T extends keyof TabParamList & string> =
  RouteProp<TabParamList, T>;

export type AuthStackRouteProps<T extends keyof AuthStackParamList & string> =
  RouteProp<AuthStackParamList, T>;

export type HomeStackRouteProps<T extends keyof HomeStackParamList & string> =
  RouteProp<HomeStackParamList, T>;

export type HistoryStackRouteProps<
  T extends keyof ProfileStackParamList & string,
> = RouteProp<ProfileStackParamList, T>;
