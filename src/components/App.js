import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Form from './Form/Form';
import List from './List/List';
import Title from './Title/Title'
import AddTaskButton from './AddTaskButton/AddTaskButton';
import styles from './styles';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [toggleShowForm, setToggleShowForm] = useState(false);
  const [taskId, setTaskId] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const IS_EMPTY_TASK_LIST = !tasksList.length;
  const EMPTY_TASK_LIST_TEXT = 'You don\'t have any tasks. Do you want to start adding tasks?';

  const clearFormState = () => {
    setToggleShowForm(false);
    setTaskId(null);
    setActiveMenu(null);
  }

  const handleAddListItem = (newTask) => {
    const shouldUpdateTask = newTask.id;
    let currentTasksList = shouldUpdateTask ? [] : tasksList.slice();

    if (shouldUpdateTask) {
      currentTasksList = tasksList.map((task) => (
        (task.id === newTask.id) ? newTask : task
      ))
    }
    else {
      currentTasksList.push({...newTask, id: new Date().getTime()});
    }
    setTasksList(currentTasksList);
    clearFormState();
  }

  const handleEditTask = (id) => {
    setTaskId(id);
    setToggleShowForm(true);
  }

  const handleRemoveTask = (delete_id) => {
    let currentTasksList = tasksList.filter(({id}) => id !== delete_id);
    setTasksList(currentTasksList);
  }

  const hideDotMenu = () => {
    if(activeMenu) setActiveMenu(null);
  }

  return (
    !toggleShowForm
    ?
      <TouchableWithoutFeedback onPress={(e) => hideDotMenu()}>
        <View style={IS_EMPTY_TASK_LIST ? styles.wrapperAppEmptyTask : styles.wrapperApp}>
          <Title tasks={tasksList} />
          <List
            tasksList={tasksList}
            handleEditTask={handleEditTask}
            handleRemoveTask={handleRemoveTask}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
          <View style={styles.textView}>
            <Text style={styles.emptyTaskListText}>
              {IS_EMPTY_TASK_LIST ? EMPTY_TASK_LIST_TEXT : ''}
            </Text>
          </View>
          <AddTaskButton tasks={tasksList} toggleShowForm={setToggleShowForm} />
        </View>
      </TouchableWithoutFeedback>
    :
      <Form
        handleAddTask={handleAddListItem}
        cancelAddTask={clearFormState}
        task={tasksList.find(({ id }) => id === taskId)}
      />
  );
}

export default App;
