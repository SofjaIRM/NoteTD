import React from 'react';
import { View } from 'react-native';
import Task from './Task/Task';

function List({
  tasksList,
  handleEditTask,
  handleRemoveTask,
  activeMenu,
  setActiveMenu,
}) {
  const tasks = () => (
    tasksList.map((task) => (
      <Task
        key={task.id}
        task={task}
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
