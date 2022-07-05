import React from 'react';
import { View } from 'react-native';
import Task from './Task/Task';

function List({
  listaTarefas,
  handleEditTask,
  handleRemoveTask,
  activeMenu,
  setActiveMenu,
}) {
  const tasks = () => (
    listaTarefas.map((task) => (
      <Task
        key={task.id}
        tarefa={task}
        onEditTask={handleEditTask}
        onRemoveTask={handleRemoveTask}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
  )))

  return (
    <View>
      { tasks() }
    </View>
    )
}

export default List
