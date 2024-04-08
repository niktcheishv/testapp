import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '@screens';
import {PROFILE_SCREEN} from '../ScreenNames';
import {ProfileStackParamList} from '@navigation/types';
import {stackOptions} from '@navigation/config';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={stackOptions}>
      <Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{title: 'პროფილი'}}
      />
    </Navigator>
  );
};

export default ProfileStack;
