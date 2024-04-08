import React, {FC} from 'react';
import {Pressable} from 'react-native';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  FlipInEasyX,
  FlipOutEasyX,
} from 'react-native-reanimated';
import {ButtonProps} from './types';
import {Text} from '@components';
import styles from './styles';

const Button: FC<ButtonProps> = ({
  label,
  onPress,
  labelStyle,
  disabled,
  color,
  animation = true,
  style,
}) => {
  const opacity = useSharedValue(1);

  const fadeIn = () => {
    opacity.value = withTiming(0.5);
  };
  const fadeOut = () => {
    opacity.value = withTiming(1);
  };

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      style={[styles.wrapper, disabled && styles.disabled, style]}>
      <Animated.View
        style={[
          styles.cont,
          color ? {backgroundColor: color} : null,
          animStyle,
        ]}
        entering={animation ? FlipInEasyX : undefined}
        exiting={animation ? FlipOutEasyX : undefined}>
        <Text children={label} style={[styles.dark, labelStyle]} />
      </Animated.View>
    </Pressable>
  );
};

export default Button;
