import React, { useState } from 'react';
import styles from './styles';
import { Text, TextInput, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function DatePicker({ tarefa, date, setDate }) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (e, date) => {
    setShowDatePicker(false);
    setDate(date.toString());
  };

  return (
    <View style={styles.wrapperDatePicker} >
      <Text style={styles.textFormTitle}>{'Data de conclusão'.toUpperCase()}</Text>
      {
        showDatePicker &&
        <DateTimePicker
          mode="date"
          value={tarefa?.date ? new Date(tarefa.date) : new Date()}
          style={{flex:1}}
          minimumDate={new Date()}
          onChange={handleDateChange}
          textColor="red"
        />
      }
      <TextInput
        style={styles.input}
        value={date && new Date(date).toISOString().slice(0, 10)}
        onPressIn={()=> setShowDatePicker(true)}
        textAlign='center'
        caretHidden={true}
        placeholder='Quando quer concluir esta tarefa?'
        placeholderTextColor = '#c5c5c9'
        underlineColorAndroid = 'transparent'
      />
    </View>
  )
}

export default DatePicker;
