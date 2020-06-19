import React from 'react';
import {
	Image, Text, View, TouchableOpacity,
} from 'react-native';
import { useHistory, useLocation } from '../../services/router';
import styles from './styles';

function Tab({ person }) {
	const location = useLocation();
	const history = useHistory();
	const isActive = location?.pathname === `/${person?.tag}`;

	return (
		<TouchableOpacity
			onPress={() => history.push(person.tag)}
		>
			<View
				style={[styles.link, isActive && styles.activeLink]}
			>
				<Image
					style={styles.image}
					source={{ uri: person?.avatar }}
				/>
				<View style={styles.content}>
					<Text style={[styles.name, isActive && styles.textActive]}>{person?.name ?? ''}</Text>
					<Text style={[styles.tag, isActive && styles.textActive]}>{person?.tag ?? ''}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default Tab;
