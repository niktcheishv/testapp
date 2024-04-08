import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import CategoryItem from './CategoryItem';
import ListFooter from './ListFooter';
import {useHome} from './container';
import {RenderItem} from './types';
import styles from './styles';

const HomeScreen = () => {
  const {data} = useHome();

  const renderItem: RenderItem = useCallback(({item}) => {
    return <CategoryItem item={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        ListFooterComponent={ListFooter}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

export default HomeScreen;
