import {Pressable, View} from 'react-native';
import React, {forwardRef, useMemo, useState} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Button, Calendar, Text} from '@components';
import styles from './styles';
import {Close} from '@assets/SVG';
import {DateModalProps} from './types';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Colors, Values} from '@constants';
import dayjs from 'dayjs';

const Backdrop = (props: BottomSheetBackdropProps) => {
  return (
    <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props} />
  );
};

const CURRENT_DATE = dayjs().format(Values.YYYY_MM_DD);

const SelectDateModal = forwardRef<BottomSheetModalMethods, DateModalProps>(
  ({title, close, select, selectedDate}, ref) => {
    const [date, setDate] = useState(selectedDate);

    const markedDates = useMemo(() => {
      return {
        [date]: {
          selected: true,
          selectedColor: Colors.SUCCESS,
        },
      };
    }, [date]);

    const onDayPress = (dateString: string) => {
      setDate(dateString);
    };

    const handlePress = () => {
      select(date);
      close();
    };

    return (
      <BottomSheetModal
        ref={ref}
        enableDynamicSizing={true}
        backdropComponent={Backdrop}
        handleStyle={styles.handle}
        handleIndicatorStyle={styles.handleIndicator}
        enableContentPanningGesture={false}
        android_keyboardInputMode="adjustPan"
        enablePanDownToClose={true}>
        <BottomSheetView style={styles.bottomSheetView}>
          <View style={styles.titleContainer}>
            {title && <Text light children={title} />}
            <Pressable onPress={close} style={styles.closeButton}>
              <Close color={Colors.TEXT} />
            </Pressable>
          </View>
          <Calendar
            maxDate={CURRENT_DATE}
            onDayPress={onDayPress}
            markedDates={markedDates}
          />
          <Button
            label="დამატება"
            onPress={handlePress}
            color={Colors.SUCCESS}
          />
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default SelectDateModal;
