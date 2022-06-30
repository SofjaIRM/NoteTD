import React, { useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Form from './Form/Form';
import List from './List/List';
import Title from './Title/Title'
import AddTaskButton from './AddTaskButton/AddTaskButton';
import styles from './styles';

function App() {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [toggleShowForm, setToggleShowForm] = useState(false);
  const [index, setIndex] = useState(-1);

  const IS_EMPTY_TASK_LIST = !listaTarefas.length;
  const EMPTY_TASK_LIST_TEXT = 'Não tens nenhuma tarefa. Queres começar a adicionar tarefas?';

  const clearFormState = () => {
    setToggleShowForm(false);
    setIndex(-1);
  }

  const handleAddListItem = (task, index) => {
    const shouldUpdateTask = index !== -1;
    const currentListaTarefas = listaTarefas.slice();

    if (shouldUpdateTask) {
      currentListaTarefas[index] = task;
    }
    else {
      currentListaTarefas.push(task);
    }
    setListaTarefas(currentListaTarefas);
    clearFormState()
  }

  const handleEditTask = (index) => {
    setIndex(index);
    setToggleShowForm(true);
  }

  const handleRemoveTask = (index) => {
    const shouldRemoveTask = index !== -1;

    if(shouldRemoveTask) {
      let currentListaTarefas = listaTarefas.slice();
      currentListaTarefas.splice(index, 1);
      setListaTarefas(currentListaTarefas);
    }
  }

  return (
    !toggleShowForm
    ?
      <View style={IS_EMPTY_TASK_LIST ? styles.wrapperAppEmptyTask : styles.wrapperApp}>
        <Title tasks={listaTarefas} />
        <List
          listaTarefas={listaTarefas}
          handleEditTask={handleEditTask}
          handleRemoveTask={handleRemoveTask}
        />
        <View style={styles.textView}>
          <Text style={styles.emptyTaskListText}>
            {IS_EMPTY_TASK_LIST ? EMPTY_TASK_LIST_TEXT : ''}
          </Text>
        </View>
        <AddTaskButton tasks={listaTarefas} toggleShowForm={setToggleShowForm} />
      </View>
    :
      <Form
        index={index}
        handleAddTask={handleAddListItem}
        cancelAddTask={clearFormState}
        tarefa={listaTarefas[index]}
      />
  );
}

export default App;
