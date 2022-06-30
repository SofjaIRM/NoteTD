import React, { useState } from 'react';
import CheckBox from 'expo-checkbox';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import DotMenu from './DotMenu/DotMenu';

const DEFAULT_COLOR = '#eeeeee';

function Task({
  index,
  tarefa,
  onRemoveTask,
  onEditTask,
}) {
  const [tarefasCheck, setTarefasCheck] = useState(false);
  const [showDotMenu, setShowDotMenu] = useState(false);

  const handleToggleDone = () => {
		setTarefasCheck(!tarefasCheck);
  }

  const handleDotMenu = () => {
    setShowDotMenu(!showDotMenu);
  }

  const { text, date, color} = tarefa;

  const getColor = (firstColor, secondColor) => (
    (color === DEFAULT_COLOR) ? firstColor : secondColor
  )

  return (
        <View>
          <View style={{
            ...styles.wrapperTasks, backgroundColor: getColor('#eeeeee', color)
          }}>
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
                <Text style={{
                  ...styles.taskDate, color: getColor('#1b7070','#ffffff')
                }}>
                  {date && new Date(date).toISOString().slice(0, 10)}
                </Text>
              </View>
            </View>
            <TouchableWithoutFeedback onPress = {handleDotMenu}>
              <Icon name="ellipsis-v" style={styles.taskMenu}/>
            </TouchableWithoutFeedback>
          </View>
          {
            showDotMenu && (
              <DotMenu
                index={index}
                onEditTask={onEditTask}
                onRemoveTask={onRemoveTask}
              />
            )
          }
        </View>
  )
}

export default Task;
