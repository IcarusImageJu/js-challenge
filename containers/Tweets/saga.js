import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { LOAD_TWEETS } from './contstants';
import { tweetsLoadSuccess, tweetsLoadFail } from './actions';

function* loadTweets({ tag }) {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	// hardcode this part for demo sake
	const userId = tag === 'realDonaldTrump' ? 1 : 2;
	const options = {
		url,
		method: 'GET',
		params: {
			userId,
		},
	};
	try {
		const { data } = yield call(request, options);
		yield put(tweetsLoadSuccess(data));
	} catch (error) {
		yield put(tweetsLoadFail(error));
		console.warn(error);
	}
}

// Individual exports for testing
export default function* LoginBoxSaga() {
	// See example in containers/HomePage/saga.js
	yield takeLatest(LOAD_TWEETS, loadTweets);
}
