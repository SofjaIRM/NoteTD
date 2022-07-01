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
  const [taskId, setTaskId] = useState(null);

  const IS_EMPTY_TASK_LIST = !listaTarefas.length;
  const EMPTY_TASK_LIST_TEXT = 'Não tens nenhuma tarefa. Queres começar a adicionar tarefas?';

  const clearFormState = () => {
    setToggleShowForm(false);
    setTaskId(null);
  }

  const handleAddListItem = (task) => {
    const shouldUpdateTask = task.id;
    let currentListaTarefas = shouldUpdateTask ? [] : listaTarefas.slice();

    if (shouldUpdateTask) {
      currentListaTarefas = listaTarefas.map((tarefa) => (
        (tarefa.id === task.id) ? task : tarefa
      ))
    }
    else {
      currentListaTarefas.push({...task, id: new Date().getTime()});
    }
    setListaTarefas(currentListaTarefas);
    clearFormState();
  }

  const handleEditTask = (id) => {
    setTaskId(id);
    setToggleShowForm(true);
  }

  const handleRemoveTask = (delete_id) => {
    let currentListaTarefas = listaTarefas.filter(({id}) => id !== delete_id);
    setListaTarefas(currentListaTarefas);
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
        handleAddTask={handleAddListItem}
        cancelAddTask={clearFormState}
        tarefa={listaTarefas.find(({ id }) => id === taskId)}
      />
  );
}

export default App;
