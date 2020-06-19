import produce from 'immer';

import { LOAD_TWEETS, TWEETS_LOAD_SUCCESS, TWEETS_LOAD_FAIL } from './contstants';

export const initialState = {
	tweets: [],
	loading: false,
	error: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) => produce(state, (draft) => {
	switch (action.type) {
		case LOAD_TWEETS:
			draft.error = false;
			draft.loading = true;
			break;
		case TWEETS_LOAD_SUCCESS:
			draft.loading = false;
			draft.error = true;
			break;
		case TWEETS_LOAD_FAIL:
			draft.loading = false;
			draft.error = true;
			break;
	}
});

export default appReducer;
