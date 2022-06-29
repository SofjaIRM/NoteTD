import React from 'react'
import { View } from 'react-native'
import styles from '../css/styles'
import Icon from 'react-native-vector-icons/FontAwesome';

function DotMenu({ index, onEditTask, onRemoveTask }){
  const renderButton = (callback, type) => {
    const title = {
      edit: 'editar tarefa',
      remove: 'remover tarefa'
    };

    const invalidType = !Object.keys(title).includes(type);

    if (invalidType) return;

    return (
      <Icon.Button
        name={type}
        backgroundColor="#de1f46"
        borderRadius={0}
        onPress={() => callback(index)}
      >
        {title[type].toUpperCase()}
      </Icon.Button>
    )
  };

  return (
     <View style={styles.dotMenu}>
       {renderButton(onEditTask, 'edit')}
       {renderButton(onRemoveTask, 'remove')}
     </View>
  )
}

export default DotMenu
