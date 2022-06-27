import React from 'react'
import { View } from 'react-native'

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
