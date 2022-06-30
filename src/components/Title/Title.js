import React from 'react';
import styles from './styles';
import {Text, View} from 'react-native';
import Logo from './Logo/Logo';

function Title({ tasks }) {
  return (
    <View style={styles.wrapperTitle}>
      {
        !tasks.length
          ? <Logo/>
          : <Text style={styles.title}>NoteTD</Text>
      }
    </View>
  );
}

export default Title;
