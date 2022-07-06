import React from 'react';
import styles from './styles';
import { Text, TextInput, View } from 'react-native';

function FormInput({
  title,
  setText,
  text,
  placeholder,
  caretHidden,
  onPressIn
}) {
  return (
    <View style={styles.wrapperTextInput}>
      <Text style={styles.textFormTitle}>{`${title}`.toUpperCase()}</Text>
      <TextInput
        style = {styles.input}
        onChangeText = {setText}
        value = {text}
        caretHidden={caretHidden}
        onPressIn={onPressIn}
        placeholderTextColor='#c5c5c9'
        placeholder={placeholder}
        underlineColorAndroid='transparent'
      />
    </View>
  )
}

export default FormInput;
