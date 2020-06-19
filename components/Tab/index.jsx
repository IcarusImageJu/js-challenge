import React from 'react';
import {
	Image, Text, View,
} from 'react-native';
import { Link, useLocation } from '../../services/router';
import styles from './styles';

function Tab({ person }) {
	const location = useLocation();
	const isActive = location?.pathname === `/${person?.tag}`;

	return (
		<Link
			to={person?.tag ?? '/'}
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
		</Link>
	);
}

export default Tab;
