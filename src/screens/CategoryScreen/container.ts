import {HomeStackNavigationProps, HomeStackRouteProps} from '@navigation/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {IExpense} from './types';
import firestore from '@react-native-firebase/firestore';
import {Values} from '@constants';
import {ADD_EXPENSES_SCREEN} from '@navigation/ScreenNames';
import {Alert} from 'react-native';
import {useAppSelector} from '@hooks';

export const useCategory = () => {
  const {currentUserID} = useAppSelector(state => state.global);
  const {setOptions} = useNavigation();
  const {params} = useRoute<HomeStackRouteProps<'CategoryScreen'>>();
  const {navigate} =
    useNavigation<HomeStackNavigationProps<'AddExpensesScreen'>>();
  const {category, isDefault} = params || {};
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const {goBack} = useNavigation();

  useLayoutEffect(() => {
    setOptions({title: category});
  }, [category, setOptions]);

  const fetchExpenses = useCallback(() => {
    if (!currentUserID) {
      return;
    }
    if (isDefault) {
      firestore()
        .collection(Values.CATEGORIES)
        .doc(category)
        .collection(currentUserID)
        .onSnapshot(snapshot => {
          const data = snapshot.docs.map(item => ({
            id: item.id,
            item: {...item.data()},
          })) as IExpense[];
          setExpenses(data);
        });
    } else {
      firestore()
        .collection(Values.CUSTOM_CATEGORIES)
        .doc(category)
        .collection(currentUserID)
        .onSnapshot(snapshot => {
          const data = snapshot.docs.map(item => ({
            id: item.id,
            item: {...item.data()},
          })) as IExpense[];
          setExpenses(data);
        });
    }
  }, [currentUserID, isDefault, category]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  const handlePress = useCallback(() => {
    navigate(ADD_EXPENSES_SCREEN, {category, isDefault});
  }, [category, isDefault, navigate]);

  const handleDeleteCategory = () => {
    if (!currentUserID) {
      return;
    }
    firestore()
      .collection(Values.CUSTOM_CATEGORIES)
      .doc(category)
      .delete()
      .then(() => goBack());
  };

  const removeCategory = () => {
    Alert.alert('ნამდვილად გსურთ კატეგორიის წაშლა?', '', [
      {
        text: 'არა',
        style: 'cancel',
      },
      {
        text: 'დიახ',
        onPress: handleDeleteCategory,
        style: 'destructive',
      },
    ]);
  };

  return {
    expenses,
    handlePress,
    removeCategory,
    category,
    isDefault,
  };
};
