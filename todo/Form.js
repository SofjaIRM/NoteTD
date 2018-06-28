import React from 'react'
import { 
  TextInput, 
  View, 
  TouchableHighlight, 
  Text,
  Alert
} from 'react-native'
import styles from '../css/styles'
import DatePicker from 'react-native-datepicker'

class MyForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tarefas: [],
      novaTarefa: [],
      text: '',
      date: '',
      done: false,
      color: '',
      index_editing: -1,
      isEditing: this.props.indexEditing,
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
    console.log('tarefa' + tarefa)
    tarefa[tarefaIndex] = value
    console.log('tarefa-tarefaindex: ' + tarefa[tarefaIndex])
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
    let tarefa = Object.assign({}, this.state.tarefa)
    !this.props.onUpdate || this.props.onUpdate(this.state.isEditing, tarefa)
    console.log('tou a ler')
  }

  updateTarefas(){
    this.setState({tarefas: this.state.tarefas})
  }

  changeColor(){
    return (
      this.props.color == '' 
      ? '#ffffff' 
      : this.props.color
    )
  }

  render () {

    const {text, date} = this.state.tarefa
    let {tarefa, isEditing} = this.state
    console.log(this.props.tarefadif)

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
            value = {
              this.state.isEditing === this.state.index_editing
              ? this.state.text 
              : tarefa[isEditing].text
            }
            placeholderTextColor = '#c5c5c9'
            placeholder = "Insira uma nova tarefa"
            underlineColorAndroid = 'transparent'
          />
        </View>
        <View style={styles.wrapperDatePicker}>
            <Text style={styles.textFormTitle}>{'Data de conclusão'.toUpperCase()}</Text>
            <DatePicker
              style={{width: '100%'}}
              date={
                this.state.isEditing === this.state.index_editing 
                ? this.state.date
                : tarefa[isEditing].date
              }
              mode="date"
              minDate={new Date()}
              format="DD-MM-YYYY"
              onDateChange={
                this.state.isEditing === this.state.index_editing
                ? (date) => this.setState({date})
                : this.handleInputChange.bind(this, text)
              }
              hideText={false}
              placeholder = 'Quando quer concluir esta tarefa?'
              customStyles={{
                dateIcon: {
                  width: 43,
                  height: 43,
                  marginLeft: 3,
                  marginRight: 0,
                },
                dateInput: {
                  borderWidth: 0.5,
                  height: 37,
                  width: '100%',
                  borderRadius: 1,
                  borderColor: '#a7a7a7',
                  padding: 10,
                  
                },
                placeholderText: {
                  fontSize: 16,
                },
                dateTouchBody:{
                  flexDirection: 'column',
                  height: 80,
                }
                }}
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

export default MyForm