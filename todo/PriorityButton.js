import React from 'react';
import styles from '../css/styles';
import { Text, TouchableHighlight } from 'react-native';

function PriorityButton({
  priorityLevel,
  setColor
}) {
  const PRIORITY_COLOR = {
    'alta': '#f54949',
    'media': '#edc53a',
    'baixa': '#c7e952'
  }

  const PRIORITY_LEVEL = PRIORITY_COLOR[priorityLevel.toLowerCase()]

  const invalidPriorityColor = !Object.keys(PRIORITY_COLOR)
    .includes(priorityLevel.toLowerCase());

  if (invalidPriorityColor) return;

  const style = {
    ...styles.buttonPriority,
    backgroundColor: PRIORITY_LEVEL
  }

  return (
    <TouchableHighlight
      style={style}
      onPress = {() => setColor(PRIORITY_LEVEL)}
    >
      <Text style={styles.textPriority}>{priorityLevel}</Text>
    </TouchableHighlight>
  )
}

export default PriorityButton;
