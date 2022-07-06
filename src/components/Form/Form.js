import React, { useState } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  Alert
} from 'react-native';
import Priority from './Priority/Priority';
import styles from './styles';
import DatePicker from './DatePicker/DatePicker';
import FormInput from './FormInput/FormInput';

function Form({ task, handleAddTask, cancelAddTask }) {
  const [text, setText] = useState(task?.text || '');
  const [date, setDate] = useState(task?.date || '');
  const [color, setColor] = useState(task?.color || '#eeeeee');

  const handleSubmitForm = () => {
    if (text){
      const data = {
        ...task,
        text,
        date,
        done: false,
        color
      }
      handleAddTask(data)
    }

    else{
      Alert.alert(
        'Ooops...'.toUpperCase(),
        'Looks like you forgot to enter the task',
      )
    }
  }

  return (
    <View style={styles.wrapperForm}>
      <FormInput
        title="task"
        text={text}
        setText={setText}
        placeholder="Insert a new task"
      />
      <DatePicker task={task} date={date} setDate={setDate}/>
      <Priority selectedColor={color} setColor={setColor}/>
        <View style={styles.buttonView}>
          <TouchableHighlight
            onPress={handleSubmitForm}
            style={styles.buttonForm}
            value={task}
          >
            <Text style={styles.buttonFormTitle}>
              Save
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={cancelAddTask}
            style={styles.buttonFormCancel}>
            <Text style={styles.buttonFormTitle}>
              Cancel
            </Text>
          </TouchableHighlight>
        </View>
    </View>
  )
}

export default Form;
