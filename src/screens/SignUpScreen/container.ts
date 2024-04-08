import {useCallback, useMemo} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useRoute} from '@react-navigation/native';
import {AuthStackRouteProps} from '@navigation/types';
import {useAppDispatch} from '@hooks';
import {setIsAuth} from '@store/slices/global';
import {IFormData} from './types';
import {useForm} from 'react-hook-form';
import {Values} from '@constants';

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const {params} = useRoute<AuthStackRouteProps<'SignUpScreen'>>();
  const {uid, phone} = params || {};

  const {control, setValue, watch} = useForm<IFormData>({
    defaultValues: {
      phoneNumber: phone,
      firstName: '',
      lastName: '',
      agreedToTerms: false,
    },
  });

  const {phoneNumber, firstName, lastName, agreedToTerms} = watch();

  const handleSignUp = useCallback(async () => {
    try {
      await firestore().collection(Values.USERS).doc(uid).set({
        phoneNumber,
        firstName,
        lastName,
        agreedToTerms,
        categories: [],
      });
      dispatch(setIsAuth(true));
    } catch (e) {
      console.warn(e);
    }
  }, [agreedToTerms, dispatch, firstName, lastName, phoneNumber, uid]);

  const handleCheckbox = useCallback(
    (newValue: boolean) => {
      setValue('agreedToTerms', newValue);
    },
    [setValue],
  );

  const isDisabled = useMemo(() => {
    return !(phoneNumber && firstName && lastName && agreedToTerms);
  }, [agreedToTerms, firstName, lastName, phoneNumber]);

  return {
    control,
    handleSignUp,
    isDisabled,
    handleCheckbox,
  };
};
