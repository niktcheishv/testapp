import {KeyboardTypeOptions, StyleProp, TextStyle} from 'react-native';

export interface TextInputProps {
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  textAlign?: 'center' | 'left' | 'right';
  editable?: boolean;
  style?: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
}
