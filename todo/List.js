import React from 'react'
import { 
  View,
} from 'react-native'
import styles from '../css/styles'
import Task from './Task'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        tarefasCheck: this.props.listaTarefas,
    }
  }

  render () {

    return (
      <View>
        { !this.props.mappingTasks || this.props.mappingTasks() }
      </View>
      )
    }
}

export default List