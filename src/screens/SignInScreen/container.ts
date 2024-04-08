import {useMemo, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationProps} from 'navigation/types';
import {SIGNUP_SCREEN} from '@navigation/ScreenNames';
import firestore from '@react-native-firebase/firestore';
import {Confirm, IFormData} from './types';
import {useAppDispatch} from '@hooks';
import {setIsAuth} from '@store/slices/global';
import {useForm} from 'react-hook-form';

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<AuthStackNavigationProps<'SignUpScreen'>>();
  const [confirm, setConfirm] = useState<Confirm>(null);

  const {control, watch} = useForm<IFormData>({
    defaultValues: {phoneNumber: '', code: ''},
  });

  const {phoneNumber, code} = watch();

  const isDisabled = useMemo(() => {
    return confirm ? code.length !== 6 : phoneNumber.length !== 9;
  }, [code, confirm, phoneNumber]);

  const handleSignUp = (phone: string, uid?: string) => {
    navigate(SIGNUP_SCREEN, {phone, uid});
  };

  const sendOTP = async () => {
    try {
      const phone = `+995${phoneNumber}`;
      const confirmation = await auth().signInWithPhoneNumber(phone);
      setConfirm(confirmation);
    } catch (e) {
      console.warn(e);
    }
  };

  const confirmCode = async () => {
    if (!confirm) {
      return;
    }
    try {
      const userCredential = await confirm.confirm(code);
      const user = userCredential?.user;

      const userDocument = await firestore()
        .collection('users')
        .doc(user?.uid)
        .get();

      if (userDocument.exists) {
        dispatch(setIsAuth(true));
      } else {
        handleSignUp(phoneNumber, user?.uid);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  return {sendOTP, confirmCode, isDisabled, confirm, control};
};
