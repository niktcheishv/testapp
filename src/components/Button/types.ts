import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  color?: string;
  animation?: boolean;
  onPress: () => void;
};
