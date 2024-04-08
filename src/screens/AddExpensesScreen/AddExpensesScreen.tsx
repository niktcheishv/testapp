import React from 'react';
import {Pressable, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Button,
  Rating,
  Text,
  ControlledInput,
  SelectDateModal,
} from '@components';
import {Colors} from '@constants';
import {formatDate} from '@utils/formatDate';
import {useAddExpenses} from './container';
import styles from './styles';

const AddExpensesScreen = () => {
  const {
    modalRef,
    control,
    rate,
    date,
    setRating,
    selectDate,
    addExpense,
    handleSubmit,
    openCalendarModal,
    closeCalendarModal,
    hasAdditionalFields,
  } = useAddExpenses();

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="never"
      contentInsetAdjustmentBehavior="automatic"
      extraScrollHeight={100}
      showsVerticalScrollIndicator={false}
      style={styles.scrollview}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View>
          <ControlledInput
            control={control}
            name="categoryName"
            placeholder="კატეგორიის სახელი"
            editable={false}
            style={styles.category}
          />
          <ControlledInput
            control={control}
            name="company"
            placeholder="კომპანიის დასახელება"
          />
          {hasAdditionalFields && (
            <>
              <ControlledInput
                control={control}
                name="allowingOil"
                placeholder="ზეთის დაშვება (მაგ.: 5x40)"
              />
              <ControlledInput
                control={control}
                name="oilLiter"
                placeholder="ზეთის ლიტრაჟი"
              />
            </>
          )}
          <ControlledInput
            control={control}
            name="cost"
            placeholder="ხარჯის ღირებულება (₾)"
          />
          <Pressable onPress={openCalendarModal} style={styles.date}>
            <Text light children={date ? formatDate(date) : 'თარიღი'} />
          </Pressable>
          <Rating rate={rate} setRating={setRating} />
        </View>
        <Button
          // disabled={isDisabled}
          color={Colors.SUCCESS}
          label="დამატება"
          onPress={handleSubmit(addExpense)}
        />
        <SelectDateModal
          close={closeCalendarModal}
          selectedDate={date}
          select={selectDate}
          title="აირჩიე თარიღი"
          ref={modalRef}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddExpensesScreen;
