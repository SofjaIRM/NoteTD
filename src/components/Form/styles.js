import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapperForm:{
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 40,
  },
  wrapperTextInput:{
    width: '100%',
  },
  wrapperDatePicker:{
    marginTop: 10,
  },
  textFormTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 'auto'
  },
  buttonForm: {
    backgroundColor: '#489baa',
    alignItems: 'center',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 4,
    width: 140,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    borderLeftColor: '#a6a6a6',
    borderRightColor: '#a6a6a6',
    borderBottomColor: '#727272',
  },
  buttonFormCancel: {
    backgroundColor: '#f7375e',
    alignItems: 'center',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 4,
    width: 140,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    borderLeftColor: '#a6a6a6',
    borderRightColor: '#a6a6a6',
    borderBottomColor: '#727272',
  },
  buttonFormTitle: {
    textTransform: 'uppercase',
    color: '#fff',
    paddingTop: 9,
    paddingBottom: 9,
  },
  input: {
    fontSize: 16,
    borderWidth: 0.5,
    borderColor: '#a7a7a7',
    paddingLeft: 10,
    fontFamily: 'notoserif',
    borderRadius: 2,
    width: '100%',
    height: 37,
    textAlign: 'center'
  },
});

export default styles;
