import React, {FC, memo} from 'react';
import {Calendar as RNCalendar, LocaleConfig} from 'react-native-calendars';
import {theme, styles} from './styles';
import {CalendarProps} from './types';

LocaleConfig.locales.geo = {
  monthNames: [
    'იანვარი',
    'თებერვალი',
    'მარტი',
    'აპრილი',
    'მაისი',
    'ივნისი',
    'ივლისი',
    'აგვისტო',
    'სექტემბერი',
    'ოქტომბერი',
    'ნოემბერი',
    'დეკემბერი',
  ],
  monthNamesShort: [
    'იან',
    'თებ',
    'მარ',
    'აპრ',
    'მაი',
    'ივნ',
    'ივლ',
    'აგვ',
    'სექ',
    'ოქტ',
    'ნოე',
    'დეკ',
  ],
  dayNames: [
    'კვირა',
    'ორშაბათი',
    'სამშაბათი',
    'ოთხშაბათი',
    'ხუთშაბათი',
    'პარასკევი',
    'შაბათი',
  ],
  dayNamesShort: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
};

LocaleConfig.locales.en = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'geo';

const Calendar: FC<CalendarProps> = memo(
  ({
    minDate,
    maxDate,
    onDayPress,
    markedDates,
    current,
    hideExtraDays,
    disabledByDefault,
    disableAllTouchEventsForDisabledDays,
    hideDayNames,
    hideArrows,
    customHeaderTitle,
  }) => {
    return (
      <RNCalendar
        firstDay={1}
        minDate={minDate}
        maxDate={maxDate}
        onDayPress={({dateString}) => onDayPress(dateString)}
        theme={theme}
        markedDates={markedDates}
        style={styles.container}
        current={current}
        hideExtraDays={hideExtraDays}
        disabledByDefault={disabledByDefault}
        disableAllTouchEventsForDisabledDays={
          disableAllTouchEventsForDisabledDays
        }
        hideDayNames={hideDayNames}
        hideArrows={hideArrows}
        customHeaderTitle={customHeaderTitle}
      />
    );
  },
);

export default Calendar;
