/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import globalReducer from './containers/App/reducer';

const persistConfig = {
	key: 'root',
	storage: ExpoFileSystemStorage,
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
