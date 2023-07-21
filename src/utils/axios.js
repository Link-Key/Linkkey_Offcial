import axios from 'axios';

// create axios instance
const http = axios.create({
	// request connect timeout
	// baseURL: "https://sns.chat",
	timeout: 2 * 60 * 1000,
	// withCredentials: true,
});
/**
 * http requset handler
 */

http.interceptors.request.use(
	(config) => {
		config.data = JSON.stringify(config.data);
		config.headers = {
			'Content-Type': 'application/json',
		};
		console.log('config:', config);
		return config;
	},
	(error) => {
		console.log('requsetError:', error);
		return Promise.reject(error);
	}
);

/**
 * http response handler
 */
http.interceptors.response.use(
	(response) => {
		console.log('response:', response);
		return response;
	},
	(error) => {
		console.log('responseError', error);
	}
);

/**
 * get
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
	return new Promise((resolve, reject) => {
		http
			.get(url, {
				params: params,
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

/**
 * post
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
	return new Promise((resolve, reject) => {
		http.post(url, data).then(
			(response) => {
				resolve(response.data);
			},
			(err) => {
				reject(err);
			}
		);
	});
}
