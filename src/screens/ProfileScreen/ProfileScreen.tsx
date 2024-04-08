import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Colors} from '@constants';
import {Button, TextInput} from '@components';
import {useProfile} from './container';

const ProfileScreen = () => {
  const {onFirstNameChange, onLastNameChange, logOut, user, handleSave} =
    useProfile();

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={user?.profile?.firstName}
          onChangeText={onFirstNameChange}
          placeholder="სახელი"
        />
        <TextInput
          value={user?.profile?.lastName}
          onChangeText={onLastNameChange}
          placeholder="გვარი"
        />
        <TextInput
          value={user?.profile?.phoneNumber}
          onChangeText={() => {}}
          placeholder="ტელეფონის ნომერი"
          editable={false}
        />
      </View>
      <View>
        <Button
          color={Colors.SUCCESS}
          label="შენახვა"
          onPress={handleSave}
          labelStyle={styles.save}
        />
        <Button label="გასვლა" onPress={logOut} color={Colors.FAILURE} />
      </View>
    </View>
  );
};

export default ProfileScreen;
