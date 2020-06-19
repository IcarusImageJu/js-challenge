import React, { useEffect, memo } from 'react';
import { Text } from 'react-native';
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

const key = 'tweets';

function Tweets({ tweets, persons, handleLoadTweets }) {
	useInjectReducer({ key, reducer });
	useInjectSaga({ key, saga });

	const { tag } = useParams();
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		console.log(tag);

		if (tag) {
			handleLoadTweets(tag);
		} else {
			history.push(`/${persons[0].tag}`);
		}
	}, [tag, location]);

	return (
		<Text>Tweet page</Text>
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
