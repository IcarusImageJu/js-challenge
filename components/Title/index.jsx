import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function Title({ title, sub }) {
	return <Text style={[styles.title, sub && styles.subTitle]}>{title}</Text>;
}

export default Title;
