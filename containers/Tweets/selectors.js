/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTweets = (state) => state.tweets || initialState;

const makeSelectTweets = () => createSelector(
	selectTweets,
	(tweets) => tweets,
);

export {
	selectTweets,
	makeSelectTweets,
};
