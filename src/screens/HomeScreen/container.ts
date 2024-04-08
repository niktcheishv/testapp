import {useEffect, useMemo, useState} from 'react';
import {Values} from '@constants';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Category, Profile, User} from './types';
import {useAppDispatch, useAppSelector} from '@hooks';
import {setCurrentUserID} from '@store/slices/global';

export const useHome = () => {
  const dispatch = useAppDispatch();
  const {currentUserID} = useAppSelector(state => state.global);
  const [categories, setCategories] = useState<Category[]>([]);
  const [customCategories, setCustomCategories] = useState<Category[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (auth().currentUser?.uid) {
      dispatch(setCurrentUserID(auth().currentUser?.uid));
    }
  }, [dispatch]);

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

  useEffect(() => {
    const subscriber = firestore()
      .collection(Values.CATEGORIES)
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
          category: doc.id,
          default: true,
        }));
        setCategories(data);
      });

    return () => subscriber();
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection(Values.CUSTOM_CATEGORIES)
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
          category: doc.id,
          default: false,
        }));

        const filtered = data.filter(item =>
          user?.profile.categories.includes(item.category),
        );

        setCustomCategories(filtered);
      });

    return () => subscriber();
  }, [user]);

  const data = useMemo(
    () => [...categories, ...customCategories],
    [categories, customCategories],
  );

  return {
    data,
  };
};
