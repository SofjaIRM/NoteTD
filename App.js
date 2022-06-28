import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import styles from './css/styles'
import Form from './todo/Form'
import List from './todo/List'
import Task from './todo/Task'
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [toggleShowForm, setToggleShowForm] = useState(false);
  const [color, setColor] = useState('');
  const [indexEditing, setIndexEditing] = useState(-1);

  const handleAddListItem = (task) => {
    const currentListaTarefas = listaTarefas.slice();
    currentListaTarefas.push(task);
    setListaTarefas(currentListaTarefas);
    setToggleShowForm(false);
    setColor('');
  }

  const handleUpdateListItem = (index, listaTarefas) => {
    if(!listaTarefas.length) {
      setToggleShowForm(false);
      return;
    };

    let tarefas = listaTarefas.slice();
    tarefas[index] = listaTarefas;
    setListaTarefas(tarefas);
    setToggleShowForm(false);
    setIndexEditing(-1);
  }

  const handleRemoveTask = (index) => {
    let currentListaTarefas = listaTarefas.slice();
    currentListaTarefas.splice(index, 1);
    setListaTarefas(currentListaTarefas);
  }

  /*
  const handleSomeEditing = (index) => {
    setIndexEditing(index);
    handleToggleForm();
  }
  */
  const renderMappingTasks = () => {
    return listaTarefas.map((task, index) => renderTasks(task, index));
  }

  const renderTasks = (item, index) => {
    return (
      <Task
        key={'item' + index}
        tarefa={item}
        isEditing={index === indexEditing}
        onEdit={handleSomeEditing(index)}
        onRemove={handleRemoveTask(index)}
      />
    )
  }

  const handleToggleForm = () => setToggleShowForm(true);

  const handleChangePriority = (newColor) => setColor(newColor);

  const handleCancelAddList = () => {
    setToggleShowForm(false);
    setIndexEditing(-1);
  }

  return (
    !toggleShowForm
    ?
    <View style={!listaTarefas.length ? styles.wrapperAppBlack: styles.wrapperApp}>
      <View style={styles.wrapperTitle}>
        <Image source={require('./img/logo.png')} />
      </View>
      <View>
        <List
              toggleShowForm = {handleToggleForm}
              listaTarefas={listaTarefas}
              handleToggleForm={handleToggleForm}
              setIndexEditing={setIndexEditing}
              handleRemoveTask={handleRemoveTask}
        />
      </View>
        {
        !listaTarefas.length
        ?
          <View>
            <Text style={{textAlign: 'center', fontSize: 18, color: '#ffffff'}}>
            Não tens nenhuma tarefa. Queres começar a adicionar tarefas?
            </Text>
          </View>
        :
          <View style={{display: 'none'}}/>
        }
      <TouchableHighlight
        style={
          !listaTarefas.length
          ? styles.bottonShowFormEmpty
          : styles.bottonShowForm
        }
        onPress = {handleToggleForm}
        value={toggleShowForm}>
        <View style={
          !listaTarefas.length
          ? {flexDirection: 'column', alignItems: 'center', padding: 5}
          : {flexDirection: 'row', alignItems: 'center'}
          } >
          <Icon name="plus" style={styles.addFirstTaskIcon}/>
        </View>
      </TouchableHighlight>
    </View>
    :
    <View style={styles.wrapperApp}>
          <Form
            onPress={handleAddListItem}
            indexEditing={indexEditing}
            cancelAddList={handleCancelAddList}
            changePriority={handleChangePriority}
            onUpdate={handleUpdateListItem}
            color={color}
            tarefa = {listaTarefas}
          />
    </View>
  );
}

export default App;
