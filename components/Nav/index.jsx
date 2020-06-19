import React from 'react';
import { View } from 'react-native';
import Tab from '../Tab';
import styles from './styles';

function Nav({ persons = [] }) {
	return (
		<View style={styles.nav}>
			{persons.map((person) => <Tab key={person.tag} person={person} />)}
		</View>
	);
}

export default Nav;
