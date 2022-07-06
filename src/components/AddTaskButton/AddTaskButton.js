import React  from 'react';
import styles from './styles';
import { Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function AddTaskButton({ tasks, toggleShowForm }) {
  const IS_EMPTY_TASK_LIST = !tasks.length;

  const handleTouchableStyle = () => {
    const { addTaskView, roundIconView, addFirstTaskTextPadding } = styles;

    const showRoundIcon = (
      IS_EMPTY_TASK_LIST ? addFirstTaskTextPadding : roundIconView
    );
    return {...addTaskView, ...showRoundIcon}
  }

  return (
    <TouchableHighlight
      style={handleTouchableStyle()}
      onPress = {() => toggleShowForm(true)}
    >
      <View>
        {
          IS_EMPTY_TASK_LIST
            ? <Text style={styles.addFistTaskTextButton}>Add task</Text>
            : <Icon name="plus" style={styles.addFirstTaskIcon}/>
        }
      </View>
    </TouchableHighlight>
  )
}

export default AddTaskButton;
