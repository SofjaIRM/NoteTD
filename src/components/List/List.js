import React from 'react';
import { View } from 'react-native';
import Task from './Task/Task';

function List({
  listaTarefas,
  handleEditTask,
  handleRemoveTask,
}) {
  const tasks = () => (
    listaTarefas.map((task) => (
      <Task
        key={task.id}
        tarefa={task}
        onEditTask={handleEditTask}
        onRemoveTask={handleRemoveTask}
      />
  )))

  return (
    <View>
      { tasks() }
    </View>
    )
}

export default List
