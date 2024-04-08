import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {useAppSelector} from '@hooks';

const Router = () => {
  const navRef = useNavigationContainerRef();
  const {isAuth} = useAppSelector(state => state.global);

  return (
    <NavigationContainer ref={navRef}>
      {isAuth ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Router;
