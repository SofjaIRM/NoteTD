import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import DateTimePicker from '@react-native-community/datetimepicker';

function DatePicker({ task, date, setDate }) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (e, date) => {
    setShowDatePicker(false);
    setDate(date.toString());
  };

  return (
    <>
      {
        showDatePicker &&
        <DateTimePicker
          mode="date"
          value={task?.date ? new Date(task.date) : new Date()}
          style={{flex:1}}
          minimumDate={new Date()}
          onChange={handleDateChange}
          textColor="red"
        />
      }
      <FormInput
        title="completion date"
        setText={setDate}
        text={date && new Date(date).toISOString().slice(0, 10)}
        onPressIn={()=> setShowDatePicker(true)}
        placeholder="Set a completion date"
        caretHidden
      />
    </>
  )
}

export default DatePicker;
