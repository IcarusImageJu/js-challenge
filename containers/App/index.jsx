import React, { memo } from 'react';
import { Platform, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Route, Router, Switch } from '../../services/router';
import Title from '../../components/Title';

import { makeSelectPersons } from './selectors';

import styles from './styles';

import Tweets from '../Tweets';
import Nav from '../../components/Nav';

function App({ persons }) {
	return (
		<Router>
			<ScrollView
				style={Platform.OS === 'web' ? styles.containerWeb : styles.container}
				contentContainerStyle={styles.innerContainer}
			>
				<Title title="News" />
				<Nav persons={persons} />
				<Switch>
					<Route path="/" component={Tweets} />
				</Switch>
			</ScrollView>
		</Router>
	);
}

const mapStateToProps = createStructuredSelector({
	persons: makeSelectPersons(),
});

export function mapDispatchToProps(dispatch) {
	return {
		dispatch,
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose(
	withConnect,
	memo,
)(App);
