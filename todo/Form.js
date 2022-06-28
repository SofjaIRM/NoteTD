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

function Form({
  color,
  tarefa,
  indexEditing,
  onPress,
  onUpdate,
  changePriority,
  cancelAddList
}) {
  const [tarefas, setTarefas] = useState([]);
  const [text, setText] = useState('');
  const [date, setDate] = useState(null);
  const [done, setDone] = useState(false);
  const [currentColor, setCurrentColor] = useState(color);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTarefa, setCurrentTarefa] = useState(tarefa);
  const [showDatePicker, setShowDatePicker] = useState(false);


  useEffect(() => {
    if(indexEditing !== -1) {
      setIsEditing(true);
    }
  }, [indexEditing]);

  const handleInputChange = (tarefaIndex, key, value) => {
    let tarefa = Object.assign({}, currentTarefa);
    console.log(tarefa);
    //tarefa[tarefaIndex][key] = value;
    setCurrentTarefa(tarefa);
  }

  const handleDateChange = (e, date) => {
    console.log(e);
    setDate(date);
    setShowDatePicker(false);
  };

  const handleSubmitForm = () => {
    if (text){
      let tarefas = {
        text,
        date,
        done,
        currentColor,
      }
      setCurrentTarefa({
        text: '',
        date: '',
        done: false,
        color: ''
      })
      !onPress || onPress(tarefas)

    }

    else{
      Alert.alert(
        'Ooops...'.toUpperCase(),
        'Parece que te esqueceste de inserir a tarefa',
      )
    }
  }


  const handleSubmit = () => {
    let tarefa = Object.assign({}, currentTarefa);
    return !onUpdate || onUpdate(isEditing, tarefa);
  }

  const changeColor = () => currentColor === '' ? '#ffffff' : currentColor;

  const isEditingTask = isEditing === indexEditing;

  return (
    <View style={styles.wrapperForm}>
      <View style={styles.wrapperTextInput}>
        <Text style={styles.textFormTitle}>{'Tarefa'.toUpperCase()}</Text>
        <TextInput
          style = {[styles.input, { backgroundColor: changeColor() }]}
          onChangeText = {
            isEditingTask
            ? (text) => setText(text)
            : () => handleInputChange(indexEditing, 'text')
          }
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
              value={date || new Date()}
              style={{flex:1}}
              minimumDate={new Date()}
              onChange={handleDateChange}
              textColor="red"
            />
          }
          <TextInput
            style={styles.input}
            value={date ? date.toISOString().slice(0, 10).toString() : ''}
            onPressIn={()=> setShowDatePicker(true)}
            textAlign='center'
            caretHidden={true}
            placeholder='Quando quer concluir esta tarefa?'
            placeholderTextColor = '#c5c5c9'
            underlineColorAndroid = 'transparent'
          />
        </View>
        <View>
          <Text style={styles.textFormTitle}>{'Prioridade'.toUpperCase()}</Text>
          <TouchableHighlight
            style={[{backgroundColor: '#f54949'}, styles.buttonPriority]}
            onPress = {
              isEditingTask
              ? () => changePriority('#f54949')
              : () => handleInputChange(indexEditing, 'color', '#f54949')
            }>
            <Text style={styles.textPriority}>Alta</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[{backgroundColor: '#edc53a'}, styles.buttonPriority]}
            onPress = {
              isEditingTask
              ? () => changePriority('#edc53a')
              : () => handleInputChange(indexEditing, 'color', '#edc53a')
            }>
            <Text style={styles.textPriority}>Media</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[{backgroundColor: '#c7e952'}, styles.buttonPriority]}
            onPress = {
              isEditingTask
              ? () => changePriority('#c7e952')
              : () => handleInputChange(indexEditing, 'color', '#c7e952')
            }>
              <Text style={styles.textPriority}>Baixa</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          onPress = {
            isEditingTask
            ? (value) => handleSubmitForm(value)
            : handleSubmit
          }
          style={styles.bottonForm}
          value={tarefas}
        >
          <Text style={styles.bottonFormTitle}>
            {
              isEditingTask
              ?'Adicionar tarefa'.toUpperCase()
              :'Guardar'.toUpperCase()
            }
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress = {cancelAddList}
          style={styles.bottonFormCancel}>
          <Text style={styles.bottonFormCancelTitle}>Cancelar</Text>
        </TouchableHighlight>
    </View>
  )
}

export default Form;
