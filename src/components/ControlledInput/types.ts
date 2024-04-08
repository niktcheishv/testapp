import {KeyboardTypeOptions, StyleProp, TextStyle} from 'react-native';
import {Control, FieldPath, FieldValues} from 'react-hook-form';

export type TextInputProps = {
  value?: string;
  editable?: boolean;
  maxLength?: number;
  style?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
  textAlign?: 'center' | 'left' | 'right';
  placeholder: string;
  onChangeText?: (value: string) => void;
  handleCheckbox?: (val: boolean) => void;
  type?: 'text' | 'checkbox';
};

export interface IReactHookFormFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<any>;
}

export type ControlledInputProps<T extends FieldValues> = TextInputProps &
  IReactHookFormFieldProps<T>;
