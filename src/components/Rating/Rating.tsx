import React, {FC, memo} from 'react';
import {Pressable, View} from 'react-native';
import {Star, FullStar} from '@assets/SVG';
import {RatingProps} from './types';
import styles from './styles';
import {Text} from '@components';

const RATES = [1, 2, 3, 4, 5];

const Rating: FC<RatingProps> = ({rate, setRating}) => {
  return (
    <View>
      <Text marginTop={24} light children="შეფასება" />
      <View style={styles.contaner}>
        {RATES.map(i =>
          i <= rate ? (
            <Pressable onPress={() => setRating(i)} key={i}>
              <FullStar />
            </Pressable>
          ) : (
            <Pressable onPress={() => setRating(i)} key={i}>
              <Star />
            </Pressable>
          ),
        )}
      </View>
    </View>
  );
};

export default memo(Rating);
