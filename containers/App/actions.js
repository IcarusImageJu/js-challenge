/*
 * App Actions
 *
 */

import { ERROR, LOADED } from './constants';

/**
 * Dispatched when fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ERROR passing the error
 */
export default function error(err) {
	return {
		type: ERROR,
		err,
	};
}

export function ready() {
	return {
		type: LOADED,
	};
}
