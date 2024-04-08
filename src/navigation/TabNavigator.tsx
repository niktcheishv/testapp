import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HOME_STACK, PROFILE_STACK} from './ScreenNames';
import {HomeStack, ProfileStack} from './stacks';
import {tabOptions} from './config';
import {TabParamList} from './types';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator screenOptions={tabOptions}>
      <Screen
        name={HOME_STACK}
        component={HomeStack}
        options={{tabBarLabel: 'მთავარი'}}
      />
      <Screen
        name={PROFILE_STACK}
        component={ProfileStack}
        options={{tabBarLabel: 'პროფილი'}}
      />
    </Navigator>
  );
};

export default TabNavigator;
