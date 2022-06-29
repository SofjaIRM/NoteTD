import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  TouchableHighlight,
  Text,
  Alert
} from 'react-native';
import styles from '../css/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import PriorityButton from './PriorityButton';

function Form({
  index,
  tarefa,
  handleAddTask,
  cancelAddTask,
}) {
  const [text, setText] = useState(tarefa?.text || '');
  const [date, setDate] = useState(tarefa?.date || '');
  const [color, setColor] = useState(tarefa?.color || '#fff');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (e, date) => {
    setDate(date.toString());
    setShowDatePicker(false);
  };

  const handleSubmitForm = () => {
    if (text){
      const tarefa = {
        text,
        date,
        done: false,
        color: color !== '#fff' ? color :'#eeeeee',
      }
      handleAddTask(tarefa, index)
    }

    else{
      Alert.alert(
        'Ooops...'.toUpperCase(),
        'Parece que te esqueceste de inserir a tarefa',
      )
    }
  }

  const changeColor = () => (tarefa?.color) ? tarefa.color : '#fff';

  return (
    <View style={styles.wrapperForm}>
      <View style={styles.wrapperTextInput}>
        <Text style={styles.textFormTitle}>{'Tarefa'.toUpperCase()}</Text>
        <TextInput
          style = {[styles.input, { backgroundColor: color }]}
          onChangeText = {setText}
          value = {text}
          placeholderTextColor = '#c5c5c9'
          placeholder = "Insira uma nova tarefa"
          underlineColorAndroid = 'transparent'
        />
      </View>
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
        <View>
          <PriorityButton priorityLevel="alta" setColor={setColor} />
          <PriorityButton priorityLevel="media" setColor={setColor}/>
          <PriorityButton priorityLevel="baixa" setColor={setColor}/>
        </View>
        <View style={styles.buttonView}>
          <TouchableHighlight
            onPress={handleSubmitForm}
            style={styles.buttonForm}
            value={tarefa}
          >
            <Text style={styles.buttonFormTitle}>
              Guardar
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={cancelAddTask}
            style={styles.buttonFormCancel}>
            <Text style={styles.buttonFormTitle}>
              Cancelar
            </Text>
          </TouchableHighlight>
        </View>
    </View>
  )
}

export default Form;
