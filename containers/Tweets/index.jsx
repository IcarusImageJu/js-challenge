import React, { useEffect, memo } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from '../../utils/injectReducer'; // eslint-disable-line
import { useInjectSaga } from '../../utils/injectSaga'; // eslint-disable-line
import reducer from './reducer';
import saga from './saga';
import { makeSelectTweets } from './selectors';
import { makeSelectPersons } from '../App/selectors';
import { useParams, useHistory, useLocation } from '../../services/router';
import { loadTweets } from './actions';
import Tweet from '../../components/Tweet';
import styles from './styles';

const key = 'tweets';

function Tweets({ tweets, persons, handleLoadTweets }) {
	useInjectReducer({ key, reducer });
	useInjectSaga({ key, saga });

	const { tag } = useParams();
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		if (tag) {
			handleLoadTweets(tag);
		} else {
			// load first person if there's none
			history.push(`/${persons[0].tag}`);
		}
	}, [tag, location]);

	if (tweets.loading) {
		return <Text style={styles.loading}>Loading your daily dose of tweets...</Text>;
	}

	return (
		<FlatList
			data={tweets.tweets}
			renderItem={({ item }) => <Tweet tweet={item} />}
		/>
	);
}

const mapStateToProps = createStructuredSelector({
	tweets: makeSelectTweets(),
	persons: makeSelectPersons(),
});

export function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		handleLoadTweets: (tag) => dispatch(loadTweets(tag)),
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose(
	memo,
	withConnect,
)(Tweets);
