import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {hideHeader} from './config';
import {INITIAL} from './ScreenNames';
import TabNavigator from './TabNavigator';
import {AppNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

const AppNavigator = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={hideHeader}>
      <Screen name={INITIAL} component={TabNavigator} />
    </Navigator>
  );
};

export default AppNavigator;
