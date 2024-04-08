import React, {FC, memo} from 'react';
import {Pressable} from 'react-native';
import {Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProps} from '@navigation/types';
import {CATEGORY_SCREEN} from '@navigation/ScreenNames';
import {CategoryItemProps} from './types';
import {Added, Default} from '@assets/SVG';
import styles from './styles';
import {formatName} from '@utils/formatName';

const CategoryItem: FC<CategoryItemProps> = memo(({item}) => {
  const {navigate} =
    useNavigation<HomeStackNavigationProps<'CategoryScreen'>>();

  const handlePress = () => {
    navigate(CATEGORY_SCREEN, {
      category: item.category,
      isDefault: item.default,
    });
  };

  return (
    <Pressable style={styles.item} onPress={handlePress}>
      {item.default ? <Default /> : <Added />}
      <Text
        center
        numberOfLines={2}
        children={item.default ? formatName(item.category) : item.category}
        marginTop={8}
      />
    </Pressable>
  );
});

export default CategoryItem;
