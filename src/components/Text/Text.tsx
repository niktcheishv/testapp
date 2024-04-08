import React, {FC} from 'react';
import {Text as RNText} from 'react-native';
import {TextProps} from './types';
import styles from './styles';

const Text: FC<TextProps> = ({
  size,
  style,
  children,
  center,
  color,
  light,
  flex,
  marginTop,
  ...props
}) => {
  return (
    <RNText
      style={[
        styles.container,
        flex && styles.flex,
        center && styles.center,
        color ? {color} : null,
        size ? {fontSize: size} : null,
        light && styles.light,
        marginTop ? {marginTop} : null,
        style,
      ]}
      children={children}
      {...props}
    />
  );
};

export default Text;
