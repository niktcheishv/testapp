import React, {memo} from 'react';
import {Controller, FieldValues} from 'react-hook-form';
import {Checkbox, TextInput} from '@components';
import {ControlledInputProps} from './types';

const ControlledInput = <T extends FieldValues>({
  control,
  name,
  textAlign,
  placeholder,
  maxLength,
  editable = true,
  type = 'text',
  handleCheckbox = () => {},
  style,
}: ControlledInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => {
        if (type === 'checkbox') {
          return (
            <Checkbox
              isChecked={value}
              onChange={handleCheckbox}
              label={placeholder}
            />
          );
        }

        return (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            editable={editable}
            textAlign={textAlign}
            style={style}
            maxLength={maxLength}
          />
        );
      }}
    />
  );
};

export default memo(ControlledInput);
