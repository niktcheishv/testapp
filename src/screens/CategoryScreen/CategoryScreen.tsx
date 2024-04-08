import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Button} from '@components';
import {Colors} from '@constants';
import styles from './styles';
import {RenderItemT} from './types';
import RenderItem from './RenderItem';
import EmptyComponent from './EmptyComponent';
import {useCategory} from './container';

const CategoryScreen = () => {
  const {expenses, handlePress, removeCategory, category, isDefault} =
    useCategory();

  const renderItem: RenderItemT = useCallback(
    ({item}) => (
      <RenderItem item={item} category={category} isDefault={isDefault} />
    ),
    [category, isDefault],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={styles.contentContainer}
      />
      <Button
        color={Colors.SUCCESS}
        label="ხარჯის დამატება"
        onPress={handlePress}
      />
      {!isDefault && (
        <Button
          color={Colors.FAILURE}
          label="კატეგორიის წაშლა"
          onPress={removeCategory}
        />
      )}
    </View>
  );
};

export default CategoryScreen;
