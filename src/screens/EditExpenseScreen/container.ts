import {useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {HomeStackRouteProps} from '@navigation/types';
import firestore from '@react-native-firebase/firestore';
import {Values} from '@constants';
import {Expense} from 'screens/CategoryScreen/types';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useAppSelector} from '@hooks';

export const useEditExpense = () => {
  const {currentUserID} = useAppSelector(state => state.global);
  const {params} = useRoute<HomeStackRouteProps<'EditExpenseScreen'>>();
  const {goBack} = useNavigation();
  const {category, item, isDefault} = params || {};
  const [editingItem, setEditingItem] = useState<Expense>({} as Expense);
  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (!currentUserID) {
      return;
    }
    firestore()
      .collection(isDefault ? Values.CATEGORIES : Values.CUSTOM_CATEGORIES)
      .doc(category)
      .collection(currentUserID)
      .doc(item.id)

      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setEditingItem(documentSnapshot.data() as Expense);
          setIsLoading(false);
        }
      });
  }, [category, currentUserID, goBack, item, isDefault]);

  const handleChange = (key: string, value: string) => {
    setEditingItem(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key as keyof Expense],
        value,
      },
    }));
  };

  const editExpense = () => {
    if (!currentUserID) {
      return;
    }
    firestore()
      .collection(isDefault ? Values.CATEGORIES : Values.CUSTOM_CATEGORIES)
      .doc(category)
      .collection(currentUserID)
      .doc(item.id)
      .update(editingItem)
      .then(() => goBack());
  };

  const handleDeleteExpense = () => {
    if (!currentUserID) {
      return;
    }
    firestore()
      .collection(isDefault ? Values.CATEGORIES : Values.CUSTOM_CATEGORIES)
      .doc(category)
      .collection(currentUserID)
      .doc(item.id)
      .delete()
      .then(() => goBack());
  };

  const deleteExpense = () => {
    Alert.alert('ნამდვილად გსურთ ხარჯის წაშლა?', '', [
      {
        text: 'არა',
        style: 'cancel',
      },
      {
        text: 'დიახ',
        onPress: handleDeleteExpense,
        style: 'destructive',
      },
    ]);
  };

  const setRating = (rate: number) => {
    setEditingItem(prevState => ({
      ...prevState,
      rate: {
        ...prevState.rate,
        value: rate,
      },
    }));
  };

  const setDate = (dateString: string) => {
    setEditingItem(prevState => ({
      ...prevState,
      date: {
        ...prevState.date,
        value: dateString,
      },
    }));
  };

  const openCalendarModal = () => {
    modalRef?.current?.present();
  };

  const closeCalendarModal = () => {
    modalRef?.current?.close();
  };

  return {
    handleChange,
    editExpense,
    deleteExpense,
    setRating,
    setDate,
    openCalendarModal,
    closeCalendarModal,
    isLoading,
    editingItem,
    modalRef,
  };
};
