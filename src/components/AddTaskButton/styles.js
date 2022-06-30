import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  addTaskView: {
    flexDirection: 'column',
    marginTop: 'auto',
    alignItems: 'center',
  },
  addFistTaskTextButton: {
    padding: 10,
    width: 220,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    borderRadius: 10,
    backgroundColor: '#de1f46',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    borderLeftColor: '#a6a6a6',
    borderRightColor: '#a6a6a6',
    borderBottomColor: '#727272',
  },
  addFirstTaskTextPadding: {
    padding: 120,
  },
  addFirstTaskIcon: {
    padding: 20,
    paddingLeft: 23,
    paddingRight: 23,
    fontSize: 20,
    borderRadius: 50,
    color: '#fff',
    backgroundColor: '#de1f46',
  },
  roundIconView: {
    marginLeft: 'auto',
    marginBottom: 40,
    marginRight: 40,
    borderRadius: 50,
  }
});

export default styles;
