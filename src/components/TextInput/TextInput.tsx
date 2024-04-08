import React, {FC} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {TextInputProps} from './types';
import styles from './styles';
import {Colors} from '@constants';

const TextInput: FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  maxLength,
  textAlign,
  editable = true,
  style,
}) => {
  return (
    <RNTextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize="none"
      autoCorrect={false}
      autoComplete="off"
      style={[styles.input, style]}
      placeholderTextColor={Colors.TEXT}
      maxLength={maxLength}
      textAlign={textAlign}
      editable={editable}
    />
  );
};

export default TextInput;
