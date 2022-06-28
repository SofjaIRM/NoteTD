import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'
import styles from '../css/styles'
import Icon from 'react-native-vector-icons/FontAwesome';

function DotMenu({ onTaskEdit, onTaskRemove }){

  const renderButton = (callback, type) => {
    const title = {
      edit: 'editar tarefa',
      remove: 'remover tarefa'
    };

    const invalidType = !Object.keys(title).includes(type);

    if (invalidType) return;

    return (
      <TouchableHighlight onPress={callback}>
        <View>
          <Icon.Button
            name="edit"
            backgroundColor="#de1f46"
            borderRadius={0}
          >
            {title[type].toUpperCase()}
          </Icon.Button>
        </View>
      </TouchableHighlight>
    )
  };

  return (
     <View style={styles.dotMenu}>
       {renderButton(onTaskEdit, 'edit')}
       {renderButton(onTaskRemove, 'remove')}
     </View>
  )
}

export default DotMenu
