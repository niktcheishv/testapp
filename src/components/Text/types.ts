import {TextProps as RNTextProps} from 'react-native';

export type TextProps = {
  size?: number;
  center?: boolean;
  color?: string;
  light?: boolean;
  flex?: boolean;
  marginTop?: number;
} & RNTextProps;
