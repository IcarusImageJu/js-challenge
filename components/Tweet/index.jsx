import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

function Tweet({ tweet }) {
	return (
		<View style={styles.card}>
			<Text style={styles.title}>{tweet.title}</Text>
			<Text style={styles.content}>{tweet.body}</Text>
		</View>
	);
}

export default Tweet;
