import React from 'react';
import {View} from 'react-native';
import {Text} from '@components';
import {List} from '@assets/SVG';
import styles from './styles';

const EmptyComponent = () => {
  return (
    <View style={styles.emprtyContainer}>
      <List />
      <Text
        center
        light
        marginTop={12}
        children={'ამ კატეგორიაში თქვენ არ გაქვთ\nდამატებული ხარჯები.'}
      />
    </View>
  );
};

export default EmptyComponent;
