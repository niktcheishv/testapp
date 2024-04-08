import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {Text} from '../index';
import {Checked, Unchecked} from '@assets/SVG';
import {CheckboxProps} from './types';
import styles from './styles';
import {Colors} from '@constants';

const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  onChange,
  label,
  disabled,
  checkedColor,
  labelStyle,
  style,
}) => {
  const handleChange = () => {
    onChange?.(!isChecked);
  };

  return (
    <Pressable onPress={handleChange} disabled={disabled}>
      <View style={[styles.container, style]}>
        {isChecked ? <Checked color={checkedColor} /> : <Unchecked />}
        {label && (
          <Text
            color={Colors.TEXT}
            children={label}
            style={[styles.label, labelStyle]}
          />
        )}
      </View>
    </Pressable>
  );
};

export default Checkbox;
