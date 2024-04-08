import React from 'react';
import {Button} from '@components';
import {Colors} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProps} from '@navigation/types';
import {ADD_CATEGORY_SCREEN} from '@navigation/ScreenNames';

const ListFooter = () => {
  const {navigate} =
    useNavigation<HomeStackNavigationProps<'AddCategoryScreen'>>();

  const handlePress = () => {
    navigate(ADD_CATEGORY_SCREEN);
  };

  return (
    <Button
      color={Colors.SUCCESS}
      label="კატეგორიის დამატება"
      onPress={handlePress}
      labelStyle={{color: Colors.DARK_BLUE}}
    />
  );
};

export default ListFooter;
