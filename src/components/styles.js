import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapperApp: {
    flex:1,
    paddingTop: 70,
  },
  wrapperAppEmptyTask: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: '#000000'
  },
  textView: {
    alignItems: 'center',
  },
  emptyTaskListText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
    width: 250,
    marginTop: 40,
  }
});

export default styles;
