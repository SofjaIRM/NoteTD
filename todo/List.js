import React from 'react';
import { View } from 'react-native';
import Task from './Task';

function List({
  listaTarefas,
  handleEditTask,
  handleRemoveTask,
}) {
  const tasks = () => {
    return listaTarefas.map((task, index) => {
      return(
        <Task
          key={'task' + index}
          index={index}
          tarefa={task}
          onEditTask={handleEditTask}
          onRemoveTask={handleRemoveTask}
        />
      )
    });
  }

  return (
    <View>
      { tasks() }
    </View>
    )
}

export default List
