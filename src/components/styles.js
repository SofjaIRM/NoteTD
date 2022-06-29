import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapperApp: {
    flex:1,
    paddingTop: 70,
  },
  wrapperAppBlack:{
    flex: 1,
    paddingTop: 70,
    backgroundColor: '#000000'
  },
  wrapperTitle: {
    alignItems: 'center',
  },
  title:{
    fontSize: 24,
  },
  addTaskButtonView: {
    flexDirection: 'column',
    marginTop: 'auto',
    alignItems: 'center',
  },
  addFistTaskText: {
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
  addFirstTaskIcon:{
    padding: 20,
    paddingLeft: 23,
    paddingRight: 23,
    fontSize: 20,
    color: '#fff',
    borderRadius: 50,
    backgroundColor: '#de1f46',
    marginRight: 40,
    marginBottom: 40
  },
});

export default styles;
