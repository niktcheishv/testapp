import React, {FC, memo} from 'react';
import {Pressable, View} from 'react-native';
import {Text} from '@components';
import styles from './styles';
import {RenderItemProps} from './types';
import {ChevronRight} from '@assets/SVG';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProps} from '@navigation/types';
import {EDIT_EXPENSE_SCREEN} from '@navigation/ScreenNames';
import {formatDate} from '@utils/formatDate';

const RenderItem: FC<RenderItemProps> = memo(({item, category, isDefault}) => {
  const {navigate} =
    useNavigation<HomeStackNavigationProps<'EditExpenseScreen'>>();

  const handlePress = () => {
    navigate(EDIT_EXPENSE_SCREEN, {item, category, isDefault});
  };

  return (
    <Pressable onPress={handlePress} style={styles.item}>
      <View>
        <Text children={item.item.company.value} />
        <Text children={formatDate(item.item.date.value)} />
      </View>
      <ChevronRight />
    </Pressable>
  );
});

export default RenderItem;
