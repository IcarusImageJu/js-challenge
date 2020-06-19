import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		position: 'relative',
		paddingHorizontal: '1rem',
	},
	containerWeb: {
		maxWidth: '900px',
		width: '100%',
		margin: 'auto',
		paddingHorizontal: '1rem',
	},
	innerContainer: {
		paddingVertical: '3rem',
	},
});
