import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { LOAD_TWEETS } from './contstants';

function* loadTweets({ tag }) {

}

// Individual exports for testing
export default function* LoginBoxSaga() {
	// See example in containers/HomePage/saga.js
	yield takeLatest(LOAD_TWEETS, loadTweets);
}
