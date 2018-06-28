import React from 'react'
import { 
  View, 
  Text,
  TouchableHighlight,
} from 'react-native'
import styles from '../css/styles'
import Icon from 'react-native-vector-icons/FontAwesome';

class DotMenu extends React.Component {

   render () {
      return (
         <View style={styles.dotMenu}>
            <TouchableHighlight onPress = {this.props.onTaskEdit}>
               <View style={styles.dotMenuButton}>
                  <Icon name="edit" style={styles.dotMenuButtonIcon}/>
                  <Text style={{color: '#313131'}}>{'Editar tarefa'.toUpperCase()}</Text>
               </View>
            </TouchableHighlight>

            <TouchableHighlight onPress = {this.props.onTaskRemove}>
               <View style={styles.dotMenuButton}>
                  <Icon name="trash" style={styles.dotMenuButtonIcon}/>
                  <Text style={{color: '#313131'}}>{'Remover Tarefa'.toUpperCase()}</Text>
               </View>
            </TouchableHighlight>
         </View>
      )
    }
}

export default DotMenu