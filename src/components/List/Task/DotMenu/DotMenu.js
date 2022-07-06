import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'

function DotMenu({ id, onEditTask, onRemoveTask }){
  const renderButton = (callback, type) => {
    const title = {
      edit: 'edit task',
      remove: 'delete task'
    };

    const invalidType = !Object.keys(title).includes(type);

    if (invalidType) return;

    return (
      <Icon.Button
        name={type}
        backgroundColor="#de1f46"
        borderRadius={0}
        onPress={() => callback(id)}
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
