import {Colors, Spacing} from '@constants';
import {StyleSheet} from 'react-native';

export const theme = {
  textSectionTitleColor: Colors.TEXT,
  todayTextColor: Colors.PRIMARY,
  arrowColor: Colors.PRIMARY,
  monthTextColor: Colors.PRIMARY,
  calendarBackground: Colors.DARK_BLUE,
  textDayHeaderFontSize: Spacing.m,
  textDayFontSize: Spacing.m,
  textDisabledColor: Colors.TEXT,
  textDayStyle: {color: Colors.WHITE},
  selectedDayTextColor: Colors.DARK_BLUE,
};

export const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.m,
    backgroundColor: Colors.DARK_BLUE,
  },
});
