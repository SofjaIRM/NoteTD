import React, {useState, useEffect} from 'react';
import CheckBox from 'expo-checkbox';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from '../css/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import DotMenu from './DotMenu';

function Task({ tarefa, onRemove, onEdit}) {
  const [tarefasCheck, setTarefasCheck] = useState(false);
  const [showDotMenu, setShowDotMenu] = useState(false);

  const handleToggleDone = () => {
		setTarefasCheck(!tarefasCheck);
  }

  const handleDotMenu = () => {
    setShowDotMenu(!showDotMenu);
  }

  const { text, date, currentColor: color } = tarefa;
  return (
        <View>
          <View style={[styles.wrapperTasks, {backgroundColor: (color == '') ? '#eeeeee' : color}]}>
            <View style={{ paddingLeft: 10, paddingRight: 10}}>
              <CheckBox
                disabled={false}
                value = {tarefasCheck}
                onValueChange = {handleToggleDone}
              />
            </View>
            <View style={styles.wrapperTextAndDate}>
              <View>
                <Text style={styles.taskText}>{text}</Text>
                <Text style={[styles.taskDate, {color: (color == '') ? '#1b7070' : '#ffffff'}]}>{date}</Text>
              </View>
            </View>
            <TouchableWithoutFeedback onPress = {handleDotMenu}>
              <Icon name="ellipsis-v" style={styles.taskMenu}/>
            </TouchableWithoutFeedback>
          </View>
          {
            showDotMenu && <DotMenu onTaskRemove={onRemove} onTaskEdit={onEdit}/>
          }
        </View>
  )
}

export default Task;
