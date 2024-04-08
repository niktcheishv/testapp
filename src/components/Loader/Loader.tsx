import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Colors} from '@constants';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color={Colors.SUCCESS} />
    </View>
  );
};

export default Loader;
