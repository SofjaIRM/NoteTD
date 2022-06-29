import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapperTextAndDate:{
    justifyContent: 'center',
    marginRight: 'auto',
    borderLeftWidth: 1,
    borderColor: '#dbdbdb',
    paddingLeft: 10,
  },
  wrapperTasks: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  listaTarefas: {
    backgroundColor: '#FFEE11',
  },
  taskText:{
    fontSize: 18,
    color: '#313131',
  },
  taskDate:{
    fontSize: 14,
  },
  taskMenu:{
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 25,
    color: '#313131'
  },
  taskNotDone: {
    backgroundColor: '#eeeeee'
  },

  taskDone:{
    backgroundColor: '#f49c88'
  },
});

export default styles;
