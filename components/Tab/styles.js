import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	link: {
		backgroundColor: 'white',
		borderRadius: '$borderRadius',
		borderColor: 'ghostwhite',
		borderWidth: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.00,
		elevation: 1,
		flexDirection: 'row',
		marginRight: '.5rem',
	},
	activeLink: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
		backgroundColor: '$title',
		borderColor: '$accent',
	},
	image: {
		height: '3rem',
		width: '3rem',
		borderTopLeftRadius: '$borderRadius',
		borderBottomLeftRadius: '$borderRadius',
	},
	content: {
		padding: '.5rem',
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
	name: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '$title',
	},
	tag: {
		fontSize: 12,
		color: '$title',
		opacity: 0.87,
	},
	textActive: {
		color: 'white',
	},
});
