/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalReducer from './containers/App/reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [''],
	// stateReconciler: autoMergeLevel2,
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
	const rootReducer = combineReducers({
		global: globalReducer,
		...injectedReducers,
	});

	return persistReducer(persistConfig, rootReducer);
}
