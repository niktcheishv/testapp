import {useCallback, useEffect, useState} from 'react';
import {Values} from '@constants';
import auth from '@react-native-firebase/auth';
import {useAppDispatch, useAppSelector} from '@hooks';
import {setIsAuth} from '@store/slices/global';
import firestore from '@react-native-firebase/firestore';
import {Profile, User} from 'screens/HomeScreen/types';
import {Alert} from 'react-native';

export const useProfile = () => {
  const {currentUserID} = useAppSelector(state => state.global);
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const subscriber = firestore()
      .collection(Values.USERS)
      .onSnapshot(querySnapshot => {
        const users = querySnapshot.docs.map(doc => ({
          id: doc.id,
          profile: doc.data() as Profile,
        }));

        const usr = users.find(item => item.id === currentUserID);

        if (usr) {
          setUser(usr);
        }
      });

    return () => subscriber();
  }, [currentUserID]);

  const logOut = async () => {
    await auth().signOut();
    dispatch(setIsAuth(false));
  };

  const onFirstNameChange = (text: string) => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev?.profile,
        firstName: text,
      },
    }));
  };

  const onLastNameChange = (text: string) => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev?.profile,
        lastName: text,
      },
    }));
  };

  const handleSave = useCallback(() => {
    if (currentUserID) {
      firestore()
        .collection(Values.USERS)
        .doc(currentUserID)
        .update({
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
        })
        .then(() => Alert.alert('ინფორმაცია წარმატებით შეიცვალა'));
    }
  }, [currentUserID, user]);

  return {
    onFirstNameChange,
    onLastNameChange,
    logOut,
    user,
    handleSave,
  };
};
