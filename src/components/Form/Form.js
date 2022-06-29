import React, { useState } from 'react';
import {
  TextInput,
  View,
  TouchableHighlight,
  Text,
  Alert
} from 'react-native';
import Priority from './Priority/Priority';
import styles from './styles';
import DatePicker from './DatePicker/DatePicker';
import FormInput from './FormInput/FormInput';

function Form({
  index,
  tarefa,
  handleAddTask,
  cancelAddTask,
}) {
  const [text, setText] = useState(tarefa?.text || '');
  const [date, setDate] = useState(tarefa?.date || '');
  const [color, setColor] = useState(tarefa?.color || '#fff');

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

  return (
    <View style={styles.wrapperForm}>
      <FormInput text={text} setText={setText}/>
      <DatePicker tarefa={tarefa} date={date} setDate={setDate}/>
      <Priority selectedColor={color} setColor={setColor}/>
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
