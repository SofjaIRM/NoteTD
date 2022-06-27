import React from 'react'
import {
  TextInput,
  View,
  TouchableHighlight,
  Text,
  Alert
} from 'react-native'
import styles from '../css/styles'
import DateTimePicker from '@react-native-community/datetimepicker';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tarefas: [],
      text: '',
      date: new Date(),
      done: false,
      color: this.props.color,
      index_editing: -1,
      isEditing: this.props.indexEditing || -1,
      tarefa: this.props.tarefa
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(newProps){
    this.setState({
      isEditing: newProps.isEditing,
      tarefa: newProps.tarefa
    })
  }

  handleInputChange (tarefaIndex, value) {
    let tarefa = Object.assign({},this.state.tarefa)
    tarefa[tarefaIndex] = value
    this.setState({
      tarefa
    })
  }

  handleSubmitForm () {
    if (this.state.text){
      let tarefas = {
        text: this.state.text,
        date: this.state.date,
        done: this.state.done,
        color: this.props.color,
      }
      this.setState({
        text: '',
        date: '',
        done: false,
        color: ''
      })
      !this.props.onPress || this.props.onPress(tarefas)

    }

    else{
      Alert.alert(
        'Ooops...'.toUpperCase(),
        'Parece que te esqueceste de inserir a tarefa',
      )
    }
  }


  handleSubmit () {
    let tarefa = Object.assign({}, this.state.tarefa);
    return !this.props.onUpdate || this.props.onUpdate(this.state.isEditing, tarefa);
  }

  updateTarefas() {
    this.setState({ tarefas: this.state.tarefas })
  }

  changeColor() {
    return this.state.color === '' ? '#ffffff' : this.state.color;
  }

  render () {

    const {text, date} = this.state.tarefa;
    let {tarefa, isEditing} = this.state;

    return (
      <View style={styles.wrapperForm}>
        <View style={styles.wrapperTextInput}>
          <Text style={styles.textFormTitle}>{'Tarefa'.toUpperCase()}</Text>
          <TextInput
            style = {[styles.input, {backgroundColor: this.changeColor()}]}
            onChangeText = {
              this.state.isEditing === this.state.index_editing
              ? (text) => this.setState({text})
              : this.handleInputChange.bind(this, 'text')
            }
            value = {this.state.text}
            placeholderTextColor = '#c5c5c9'
            placeholder = "Insira uma nova tarefa"
            underlineColorAndroid = 'transparent'
          />
        </View>
        <View style={styles.wrapperDatePicker}>
            <Text style={styles.textFormTitle}>{'Data de conclusão'.toUpperCase()}</Text>
            <DateTimePicker
              date={this.state.date}
              value={new Date()}
              mode="date"
              minimumDate={new Date()}
              onDateChange={
                this.state.isEditing === this.state.index_editing
                ? (date) => this.setState({date})
                : this.handleInputChange.bind(this, text)
              }
              title = 'Quando quer concluir esta tarefa?'
              />
          </View>
          <View>
            <Text style={styles.textFormTitle}>{'Prioridade'.toUpperCase()}</Text>

            <TouchableHighlight
              style={[{backgroundColor: '#f54949'}, styles.buttonPriority]}
              onPress = {
                this.state.isEditing === this.state.index_editing
                ? () => this.props.changePriority('#f54949')
                : this.handleInputChange.bind(this, 'color', '#f54949')
              }>
              <Text style={styles.textPriority}>Alta</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={[{backgroundColor: '#edc53a'}, styles.buttonPriority]}
              onPress = {
                this.state.isEditing === this.state.index_editing
                ? () => this.props.changePriority('#edc53a')
                : this.handleInputChange.bind(this, 'color', '#edc53a')
              }>
              <Text style={styles.textPriority}>Media</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={[{backgroundColor: '#c7e952'}, styles.buttonPriority]}
              onPress = {
                this.state.isEditing === this.state.index_editing
                ? () => this.props.changePriority('#c7e952')
                : this.handleInputChange.bind(this, 'color', '#c7e952')
              }>
              <Text style={styles.textPriority}>Baixa</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            onPress = {
              this.state.isEditing === this.state.index_editing
              ? this.handleSubmitForm.bind(this)
              : this.handleSubmit
            }
            style={styles.bottonForm}
            value={this.state.tarefas}
          >
            <Text style={styles.bottonFormTitle}>
              {
                this.state.isEditing === this.state.index_editing
                ?'Adicionar tarefa'.toUpperCase()
                :'Guardar'.toUpperCase()
              }
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress = {this.props.cancelAddList}
            style={styles.bottonFormCancel}>
            <Text style={styles.bottonFormCancelTitle}>Cancelar</Text>
          </TouchableHighlight>
      </View>

    )
  }
}

export default Form;
