import Axios from 'axios';

// middleware that add the token if it exist
Axios.interceptors.request.use(async (config) => {
	const newConfig = config;
	// request middleware
	return newConfig;
}, (err) => {
	Promise.reject(err);
});

/**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */
function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

/**
   * Requests a URL, returning a promise
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to "fetch"
   *
   * @return {object}           The response data
   */
function request(options) {
	return Axios(options)
		.then(checkStatus)
		.catch(({ response }) => checkStatus(response));
}

export default request;
