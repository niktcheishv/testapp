import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {Values} from '@constants';
import {SubmitHandler, useForm} from 'react-hook-form';
import {IFormData} from './types';
import {useAppSelector} from '@hooks';

export const useAddCategory = () => {
  const {goBack} = useNavigation();
  const {currentUserID} = useAppSelector(state => state.global);

  const {control, handleSubmit, watch} = useForm<IFormData>({
    defaultValues: {categoryName: ''},
  });

  const name = watch('categoryName');

  const addCategory: SubmitHandler<IFormData> = useCallback(
    data => {
      firestore()
        .collection(Values.CUSTOM_CATEGORIES)
        .doc(data.categoryName)
        .set({})
        .then(() => goBack());

      if (currentUserID) {
        firestore()
          .collection(Values.USERS)
          .doc(currentUserID)
          .update({
            categories: firestore.FieldValue.arrayUnion(data.categoryName),
          });
      }
    },
    [currentUserID, goBack],
  );

  return {
    control,
    handleSubmit,
    addCategory,
    name,
  };
};
