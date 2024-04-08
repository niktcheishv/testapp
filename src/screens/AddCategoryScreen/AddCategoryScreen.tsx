import React from 'react';
import {View} from 'react-native';
import {Button, ControlledInput} from '@components';
import {Colors} from '@constants';
import {useAddCategory} from './container';
import styles from './styles';

const AddCategoryScreen = () => {
  const {name, handleSubmit, addCategory, control} = useAddCategory();

  return (
    <View style={styles.container}>
      <ControlledInput
        control={control}
        name="categoryName"
        placeholder="კატეგორიის სახელი"
      />
      <Button
        disabled={!name}
        color={Colors.SUCCESS}
        label="დამატება"
        onPress={handleSubmit(addCategory)}
        style={!name && styles.disabled}
      />
    </View>
  );
};

export default AddCategoryScreen;
