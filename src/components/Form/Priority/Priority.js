import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

function Priority({ selectedColor, setColor }) {
  const PRIORITY_COLOR = {
    'high': '#f54949',
    'medium': '#edc53a',
    'low': '#c7e952'
  }

  const priorityButton = () => (
    Object.keys(PRIORITY_COLOR || {})
      .map((key, index) => {
        const COLOR = PRIORITY_COLOR[key];
        const isSelected = COLOR === selectedColor;
        const underlayColor = `${COLOR}bd`;

        const style = {
          ...styles.buttonPriority,
          backgroundColor: COLOR
        }

        return (
          <TouchableHighlight
            key={PRIORITY_COLOR[key]}
            style={isSelected ? { ...style, ...styles.selectedPriority } : style}
            underlayColor={underlayColor}
            onPress = {() => setColor(COLOR)}
          >
            <Text style={styles.textPriority}>{key}</Text>
          </TouchableHighlight>
        )
      }) || null
  );

  return (
    <View style={{ marginTop: 50}}>
      {priorityButton()}
    </View>
  )
}

export default Priority;
