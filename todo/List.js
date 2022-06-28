import React, { useState } from 'react'
import { View } from 'react-native'

function List({ listaTarefas, mappingTasks }) {
  return (
    <View>
      { !mappingTasks || mappingTasks(listaTarefas) }
    </View>
    )
}

export default List
