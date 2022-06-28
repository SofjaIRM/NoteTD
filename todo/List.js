import React from 'react';
import { View } from 'react-native';
import Task from './Task';

function List({ listaTarefas, handleToggleForm, setIndexEditing, handleRemoveTask}) {
  const handleSomeEditing = (index) => {
    setIndexEditing(index);
    handleToggleForm();
  }

  const tasks = () => {
    return listaTarefas.map((task, index) => (
      <Task
        key={'task' + index}
        tarefa={task}
        onEdit={() => handleSomeEditing(index)}
        onRemove={() => handleRemoveTask(index)}
      />
    ));
  }

  return (
    <View>
      { tasks() }
    </View>
    )
}

export default List
