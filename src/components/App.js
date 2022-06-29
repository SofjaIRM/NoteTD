import React, { useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Form from './Form/Form';
import List from './List/List';
import Logo from './Logo/Logo';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

function App() {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [toggleShowForm, setToggleShowForm] = useState(false);
  const [index, setIndex] = useState(-1);

  const handleAddListItem = (task, index) => {
    const currentListaTarefas = listaTarefas.slice();
    if (index !== -1) {
      currentListaTarefas[index] = task;
    }
    else {
      currentListaTarefas.push(task);
    }
    setListaTarefas(currentListaTarefas);
    setToggleShowForm(false);
    setIndex(-1);
  }

  const handleEditTask = (index) => {
    console.log('edite task', index);
    setIndex(index);
    setToggleShowForm(true);
  }

  const handleRemoveTask = (index) => {
    console.log('remove', index);
    if(index !== -1) {
      let currentListaTarefas = listaTarefas.slice();
      currentListaTarefas.splice(index, 1);
      setListaTarefas(currentListaTarefas);
    }
  }

  const handleCancelAddList = () => {
    setToggleShowForm(false);
    setIndex(-1);
  }

  return (
    !toggleShowForm
    ?
    <View style={!listaTarefas.length ? styles.wrapperAppBlack: styles.wrapperApp}>
      <View style={styles.wrapperTitle}>
        { !listaTarefas.length
          ? <Logo/>
          : <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>NoteTD</Text>
        }
      </View>
      <View>
        <List
          listaTarefas={listaTarefas}
          handleEditTask={handleEditTask}
          handleRemoveTask={handleRemoveTask}
        />
      </View>
        {
        !listaTarefas.length
        ?
          <View style={{alignItems: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 18, color: '#ffffff', width: 250, marginTop: 40}}>
            Não tens nenhuma tarefa. Queres começar a adicionar tarefas?
            </Text>
          </View>
        :
          <View style={{display: 'none'}}/>
        }
      <TouchableHighlight
        style={[
          styles.addTaskButtonView,
          !listaTarefas.length
            ? { marginBottom: 120 }
            : { marginLeft: 'auto' }]
        }
        onPress = {() => setToggleShowForm(true)}
        value={toggleShowForm}>
        <View>
          {
            !listaTarefas.length
            ? <Text style={styles.addFistTaskText}>Adicionar tarefa</Text>
            : <Icon name="plus" style={styles.addFirstTaskIcon}/>
          }
        </View>
      </TouchableHighlight>
    </View>
    :
    <View style={styles.wrapperApp}>
          <Form
            index={index}
            handleAddTask={handleAddListItem}
            cancelAddTask={handleCancelAddList}
            tarefa={listaTarefas[index]}
          />
    </View>
  );
}

export default App;
