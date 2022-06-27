import React from 'react';
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

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listaTarefas: [],
      dotMenu: false,
      toggleShowForm: false,
      color: '',
      value:'',
      indexEditing: -1,
    };

    this.handleUpdateListItem = this.handleUpdateListItem.bind(this)
    this.handleAddListItem = this.handleAddListItem.bind(this)
    this.handleCancelAddList = this.handleCancelAddList.bind(this)
    //this.handleRemoveTask = this.handleRemoveTask.bind(this)
    this.handleToggleForm = this.handleToggleForm.bind(this)
    this.handleChangePriority = this.handleChangePriority.bind(this)
    this.renderMappingTasks = this.renderMappingTasks.bind(this)

  };

  handleAddListItem(tarefas){
    let listaTarefas = this.state.listaTarefas.slice()
    listaTarefas.push(tarefas)
    this.setState({
      listaTarefas: listaTarefas,
      toggleShowForm: false,
      color: ''
    })
  }

  handleUpdateListItem (index, listaTarefas) {
    let tarefas = this.state.listaTarefas.slice()
    tarefas[index] = listaTarefas
    this.setState({
      listaTarefas: tarefas,
      toggleShowForm: false,
      indexEditing: -1,
    })
  }

  handleRemoveTask (index) {
    let listaTarefas = this.state.listaTarefas.slice()
    listaTarefas.splice(index, 1)
    this.setState({listaTarefas})
  }

  handleSomeEditing (index) {
    this.setState({indexEditing: index})
    this.handleToggleForm()
  }

  renderMappingTasks(){
    return (
      this.state.listaTarefas.map(
      (item, index) => this.renderTasks(item, index)
      )
    )
  }

  renderTasks(item, index){
    return (
      <Task
        key={'item' + index}
        tarefa={item}
        isEditing={index === this.state.indexEditing}
        onEditing={this.handleSomeEditing.bind(this, index)}
        onRemove={this.handleRemoveTask.bind(this, index)}
      />
    )
  }

  handleToggleForm(){
    this.setState({toggleShowForm: true})
  }

  handleChangePriority(newColor){
    let color = newColor
    this.setState({color})
  }

  handleCancelAddList(){
    this.setState({
      toggleShowForm: false,
      indexEditing: -1,
    })
  }

  render() {

    let {listaTarefas, color} = this.state
    return (

      !this.state.toggleShowForm
      ?
      <View style={this.state.listaTarefas == '' ? styles.wrapperAppBlack: styles.wrapperApp}>
        <View style={styles.wrapperTitle}>
          <Image source={require('./img/logo.png')} />
        </View>
        <View>
          <List
                toggleShowForm = {this.handleToggleForm.bind(this)}
                mappingTasks = {this.renderMappingTasks}
          />
        </View>
          {
          this.state.listaTarefas == ''
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
            this.state.listaTarefas == ''
            ? styles.bottonShowFormEmpty
            : styles.bottonShowForm
          }
          onPress = {this.handleToggleForm}
          value={this.state.toggleShowForm}>
          <View style={
            this.state.listaTarefas == ''
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
              onPress={this.handleAddListItem}
              indexEditing={this.state.indexEditing}
              cancelAddList={this.handleCancelAddList}
              changePriority={this.handleChangePriority}
              onUpdate={this.handleUpdateListItem.bind(this)}
              color={color}
              tarefa = {listaTarefas}
            />
      </View>
    );
  }
}


