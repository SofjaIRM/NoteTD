import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

	flexRow:{
		flexDirection: 'row',
	},

//APP
	wrapperApp: {
		flex:1,
		paddingTop: 25,
	},
	wrapperAppBlack:{
		flex: 1,
		paddingTop: 25,
		backgroundColor: '#000000'
	},

	wrapperTitle: {
		alignItems: 'center',
	},

	title:{
		fontSize: 24,
	},

	addFirstTaskIcon:{
		paddingRight: 5,
		fontSize: 20,
		color: '#313131',
		alignItems: 'baseline',
	},

//FORM
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
		textAlign: 'center',
		paddingTop: 5,
		paddingBottom: 5,
		marginTop: 20,
		marginBottom: 10,
		backgroundColor: '#880010',
		color: '#ffffff',
	},

//FORM BOTTONS
	bottonForm: {
		backgroundColor: '#489baa',
		alignItems: 'center',
		marginTop: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 4,
		width: 180,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderBottomWidth: 2,
		borderLeftColor: '#a6a6a6',
		borderRightColor: '#a6a6a6',
		borderBottomColor: '#727272',
	},
	bottonFormCancel: {
		backgroundColor: '#f7375e',
		alignItems: 'center',
		marginTop: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 4,
		width: 180,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderBottomWidth: 2,
		borderLeftColor: '#a6a6a6',
		borderRightColor: '#a6a6a6',
		borderBottomColor: '#727272',
	},
	bottonFormTitle: {
		paddingTop: 9,
		paddingBottom: 9,
	},
	bottonFormCancelTitle: {
		paddingTop: 9,
		paddingBottom: 9,
	},
	bottonShowForm:{
		marginTop: 'auto',
		backgroundColor: '#489baa',
	},
	bottonShowFormEmpty:{
		backgroundColor: '#489baa',
		width: '60%',
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderBottomWidth: 2,
		borderLeftColor: '#a6a6a6',
		borderRightColor: '#a6a6a6',
		borderBottomColor: '#727272',
	},

//FORM INPUT
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

//FORM BUTTONS PRIORITY
	buttonPriority:{
		width: '60%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 3,
		marginBottom: 3,
		borderRadius: 3,
	},

	textPriority:{
		textAlign: 'center',
		paddingTop: 5,
		paddingBottom: 5,
	},


//TASKS
	wrapperTextAndDate:{
		//height: 50,
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
//TASKS CHECKERBOX
	taskNotDone: {
		backgroundColor: '#eeeeee'
	},
	
	taskDone:{
		backgroundColor: '#f49c88'
	},
//TASKS DOTMENU
	dotMenu:{
		position: 'absolute',
		right: 25,
		bottom: 2,
		backgroundColor: '#9b9b9b',
		zIndex: 5,
	},
	dotMenuButton:{
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 5,
		paddingBottom: 5,
		paddingRight: 10,
		paddingLeft: 10,
	},
	dotMenuButtonIcon:{
		paddingRight: 5,
		fontSize: 15,
		color: '#313131',
		alignItems: 'baseline',
	},
});

export default styles