import { LOAD_TWEETS, TWEETS_LOAD_SUCCESS, TWEETS_LOAD_FAIL } from './contstants';

export function loadTweets(tag) {
	return {
		type: LOAD_TWEETS,
		tag,
	};
}

export function tweetsLoadSuccess(tweets) {
	return {
		type: TWEETS_LOAD_SUCCESS,
		tweets,
	};
}

export function tweetsLoadFail() {
	return {
		type: TWEETS_LOAD_FAIL,
	};
}
