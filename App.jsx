import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { PersistGate } from 'redux-persist/integration/react';
import stylesheet from './constants/stylesheet';

import App from './containers/App';

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Stylesheet
EStyleSheet.build(stylesheet);

// Store
import store from './store';

function Root() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={store.persistor}>
				<App />
			</PersistGate>
		</Provider>
	);
}

export default Root;
