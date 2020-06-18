import React from 'react';
import { View, Platform } from 'react-native';
import { Route, Router, Switch } from '../../services/router';

import styles from './styles';

import Tweets from '../Tweets'

function App() {
	return (
		<Router>
			<View style={Platform.OS === 'web' ? styles.containerWeb : styles.container}>
				<Switch>
					<Route path="/" component={Tweets} />
				</Switch>
			</View>
		</Router>
	);
}

export default App;
