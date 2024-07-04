import React from 'react';
import {Calendar} from 'react-native-calendars';
import {colors} from '../../services';
export default function CustomCalendar(props) {
  const marked = {
    '2023-02-16': {
      selected: true,
      selectedColor: colors.background,
      selectedTextColor: colors.lightBackground,
    },
  };
  return (
    <Calendar
      initialDate="2023-02-16"
      minDate="2022-12-01"
      maxDate="2023-01-30"
      disableAllTouchEventsForDisabledDays={true}
      markedDates={marked}
      {...props}
      style={{
        borderRadius: 5,
        padding: 20,
      }}
      theme={{
        calendarBackground: colors.lightBackground,
        monthTextColor: colors.background,
        dayTextColor: colors.background,
      }}
    />
  );
}
