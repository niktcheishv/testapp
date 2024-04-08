import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Colors} from '@constants';
import {Home, Profile} from '@assets/SVG';
import {HOME_STACK, PROFILE_STACK} from './ScreenNames';

type RouteT = RouteProp<ParamListBase, string>;

type tabOptionProps = {
  route: RouteT;
};

const getTabBarIcon = (color: string, route: RouteT) => {
  if (route.name === HOME_STACK) {
    return <Home color={color} />;
  }

  if (route.name === PROFILE_STACK) {
    return <Profile color={color} />;
  }
};

export const hideHeader: NativeStackNavigationOptions = {
  headerShown: false,
};

export const tabOptions = ({
  route,
}: tabOptionProps): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarStyle: {backgroundColor: Colors.DARK_BLUE},
  tabBarActiveTintColor: Colors.PRIMARY,
  tabBarLabelStyle: {fontSize: 12},
  tabBarIcon: ({color}) => getTabBarIcon(color, route),
});

export const stackOptions: NativeStackNavigationOptions = {
  headerStyle: {backgroundColor: Colors.DARK_BLUE},
  headerTitleStyle: {color: Colors.TEXT},
  headerBackTitleVisible: false,
  headerTintColor: Colors.PRIMARY,
};
