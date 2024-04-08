import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {Button, ControlledInput} from '@components';
import {useSignIn} from './container';
import styles from './styles';

const CAR = require('@assets/images/car.png');

const SignInScreen = () => {
  const {sendOTP, confirmCode, isDisabled, confirm, control} = useSignIn();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={CAR} style={styles.pic} />
        {confirm && (
          <ControlledInput
            control={control}
            name="code"
            placeholder="კოდი"
            keyboardType="phone-pad"
            maxLength={6}
            textAlign="center"
            style={styles.otpInput}
          />
        )}
        {!confirm && (
          <ControlledInput
            control={control}
            name="phoneNumber"
            placeholder="ტელეფონის ნომერი"
            keyboardType="phone-pad"
            maxLength={9}
            textAlign="center"
            style={styles.numberInput}
          />
        )}
        <Button
          disabled={isDisabled}
          label={!confirm ? 'კოდის გამოგზავნა' : 'კოდის დადასტურება'}
          onPress={!confirm ? sendOTP : confirmCode}
          style={isDisabled && styles.disbaled}
        />
      </View>
    </SafeAreaView>
  );
};
export default SignInScreen;
