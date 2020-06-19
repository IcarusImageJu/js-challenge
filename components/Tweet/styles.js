import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	card: {
		borderRadius: '$borderRadius',
		borderColor: 'ghostwhite',
		borderWidth: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		marginBottom: '.5rem',
		paddingHorizontal: '1rem',
		paddingVertical: '1.5rem',
	},
	title: {
		color: '$title',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: '.5rem',
	},
	content: {
		color: '$title',
		opacity: 0.87,
	},
});
