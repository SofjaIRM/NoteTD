import React from 'react'
import {
  View,
  Text,
  CheckBox,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'
import styles from '../css/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import DotMenu from './DotMenu'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        tarefasCheck: false,
        tarefa: this.props.tarefa,
        dotMenu: false,
        editing: false,
        hideText: true,
    }

    this.handleEdit = this.handleEdit.bind(this)
    this.handleToggleDone = this.handleToggleDone.bind(this)
    this.handleDotMenu = this.handleDotMenu.bind(this)
    this.handleToggleDateInput = this.handleToggleDateInput.bind(this)
  }

  componentWillReceiveProps(newProps){
    this.setState({tarefa: newProps.tarefa})
  }

  handleToggleDone(){
		this.setState({
			tarefasCheck: !this.state.tarefasCheck
		})
  }

  handleDotMenu(){
    this.setState({
      dotMenu: !this.state.dotMenu
    })
  }

  handleEdit () {
    if(this.props.isEditing) {
        this.handleSubmit ()
    }
    else {
        !this.props.onEditing || this.props.onEditing(this)

    }
  }

  handleToggleDateInput(date){
    if(date !== ''){
      let tarefa = Object.assign({}, this.state.tarefa)
      tarefa.date = ''
      this.setState({
        tarefa,
        hideText: true
      })
    }
  }

  render () {
    const {text, date, color} = this.state.tarefa
    return (
          <View>
            <View style={[styles.wrapperTasks, {backgroundColor: (color == '') ? '#eeeeee' : color}]}>

              <View>
                <CheckBox
                  onValueChange = {this.handleToggleDone}
                  value = {this.state.tarefasCheck}/>
              </View>

              <View style={styles.wrapperTextAndDate}>
                <View>
                  <Text style={styles.taskText}>{text}</Text>
                  <Text style={[styles.taskDate, {color: (color == '') ? '#1b7070' : '#ffffff'}]}>{date}</Text>
                </View>
              </View>

              <TouchableWithoutFeedback onPress = {this.handleDotMenu}>
                <Icon name="ellipsis-v" style={styles.taskMenu}/>
              </TouchableWithoutFeedback>
            </View>

            {
              (this.state.dotMenu == true)
              ? <DotMenu onTaskRemove={this.props.onRemove}
                        onTaskEdit={this.props.onEditing}/>
              : <Text style={{position: 'absolute'}}/>
            }
          </View>
    )
  }
}

export default List
