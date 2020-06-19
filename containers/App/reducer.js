/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import { ERROR, LOADED } from './constants';

// The initial state of the App
export const initialState = {
	loading: true,
	error: false,
	persons: [{
		tag: 'realDonaldTrump',
		name: 'Donald Trump',
		avatar: 'https://leseco.ma/wp-content/uploads/2020/01/TRUMPleseco.jpg',
	}, {
		tag: 'hilary',
		name: 'Hillary Clinton',
		avatar: 'https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTE4MDAzNDEwMDU4NTc3NDIy/hillary-clinton-9251306-2-402.jpg',
	}],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) => produce(state, (draft) => {
	switch (action.type) {
		case ERROR:
			draft.error = action.error;
			draft.loading = false;
			break;
		case LOADED:
			draft.loading = false;
			break;
	}
});

export default appReducer;
