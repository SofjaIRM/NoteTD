import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import DateTimePicker from '@react-native-community/datetimepicker';

function DatePicker({ date, setDate }) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const currentDate = () => date ? new Date(date) : new Date();

  const handleDateChange = (e, selectedDate) => {
    setShowDatePicker(false);
    if(e.type === 'set') {
      setDate(selectedDate.toString());
    }
  };

  return (
    <>
      {
        showDatePicker &&
        <DateTimePicker
          mode="date"
          value={() => currentDate()}
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
