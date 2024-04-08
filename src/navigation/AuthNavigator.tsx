import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen} from '@screens';
import {hideHeader} from './config';
import {SIGNIN_SCREEN, SIGNUP_SCREEN} from './ScreenNames';
import {AuthStackParamList} from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator initialRouteName={SIGNIN_SCREEN} screenOptions={hideHeader}>
      <Screen name={SIGNIN_SCREEN} component={SignInScreen} />
      <Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
    </Navigator>
  );
};

export default AuthNavigator;
