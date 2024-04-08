import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddCategoryScreen,
  AddExpensesScreen,
  CategoryScreen,
  EditExpenseScreen,
  HomeScreen,
} from '@screens';
import {stackOptions} from '@navigation/config';
import {HomeStackParamList} from '@navigation/types';
import {
  ADD_CATEGORY_SCREEN,
  ADD_EXPENSES_SCREEN,
  CATEGORY_SCREEN,
  EDIT_EXPENSE_SCREEN,
  HOME_SCREEN,
} from '../ScreenNames';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={stackOptions} initialRouteName={HOME_SCREEN}>
      <Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{title: 'კატეგორიები'}}
      />
      <Screen
        name={CATEGORY_SCREEN}
        component={CategoryScreen}
        options={{title: ''}}
      />
      <Screen
        name={ADD_EXPENSES_SCREEN}
        component={AddExpensesScreen}
        options={{title: 'ხარჯის დამატება'}}
      />
      <Screen
        name={EDIT_EXPENSE_SCREEN}
        component={EditExpenseScreen}
        options={{title: 'ხარჯის რედაქტირება'}}
      />
      <Screen
        name={ADD_CATEGORY_SCREEN}
        component={AddCategoryScreen}
        options={{title: 'კატეგორიის დამატება'}}
      />
    </Navigator>
  );
};

export default HomeStack;
