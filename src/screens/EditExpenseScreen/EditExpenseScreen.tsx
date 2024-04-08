import React from 'react';
import {Pressable, View} from 'react-native';
import {
  Button,
  Loader,
  Rating,
  SelectDateModal,
  Text,
  TextInput,
} from '@components';
import {Colors, Values} from '@constants';
import styles from './styles';
import {formatDate} from '@utils/formatDate';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useEditExpense} from './container';

const EditExpenseScreen = () => {
  const {
    handleChange,
    editExpense,
    deleteExpense,
    setRating,
    setDate,
    openCalendarModal,
    closeCalendarModal,
    isLoading,
    editingItem,
    modalRef,
  } = useEditExpense();

  const getFields = () => {
    return Object.entries(editingItem)
      .sort((a, b) => a[1].order - b[1].order)
      .map(([key, value]) => {
        if (typeof value.value === 'number') {
          return <Rating key={key} rate={value.value} setRating={setRating} />;
        }
        if (key === Values.DATE_FIELD) {
          return (
            <Pressable
              key={key}
              onPress={openCalendarModal}
              style={styles.date}>
              <Text light children={formatDate(value.value)} />
            </Pressable>
          );
        }
        return (
          <TextInput
            key={key}
            value={value.value}
            placeholder={value.placeholder}
            onChangeText={text => handleChange(key, text)}
            editable={key !== Values.CATEGORY_FIELD}
            style={key === Values.CATEGORY_FIELD && {color: Colors.PRIMARY}}
          />
        );
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic"
      extraScrollHeight={100}
      showsVerticalScrollIndicator={false}
      style={styles.scrollview}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View>{getFields()}</View>
        <View>
          <Button
            color={Colors.SUCCESS}
            label="ხარჯის რედაქტირება"
            animation={false}
            onPress={editExpense}
            labelStyle={styles.label}
          />
          <Button
            color={Colors.FAILURE}
            label="წაშლა"
            animation={false}
            onPress={deleteExpense}
            labelStyle={styles.label}
          />
        </View>
        <SelectDateModal
          close={closeCalendarModal}
          selectedDate={editingItem.date.value}
          select={setDate}
          title="აირჩიე თარიღი"
          ref={modalRef}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EditExpenseScreen;
