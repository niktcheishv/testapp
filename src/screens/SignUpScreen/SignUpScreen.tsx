import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {Button, ControlledInput} from '@components';
import {Colors} from '@constants';
import {useSignUp} from './container';
import styles from './styles';

const SignUpScreen = () => {
  const {control, isDisabled, handleSignUp, handleCheckbox} = useSignUp();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require('@assets/images/car.png')} style={styles.pic} />
        <View style={styles.inputs}>
          <ControlledInput
            control={control}
            name="phoneNumber"
            placeholder="ტელეფონის ნომერი"
            editable={false}
            style={{color: Colors.PRIMARY}}
          />
          <ControlledInput
            control={control}
            name="firstName"
            placeholder="სახელი"
          />
          <ControlledInput
            control={control}
            name="lastName"
            placeholder="გვარი"
          />
          <ControlledInput
            control={control}
            type="checkbox"
            name="agreedToTerms"
            placeholder="ვეთანხმები წესებს და პირობებს"
            handleCheckbox={handleCheckbox}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="შენახვა"
          disabled={isDisabled}
          onPress={handleSignUp}
          style={isDisabled && styles.disabled}
        />
      </View>
    </SafeAreaView>
  );
};
export default SignUpScreen;
