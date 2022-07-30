import axios from "axios";

axios.defaults.timeout = 100000;
axios.defaults.baseURL = ''


/**
 * http requset handler
 */

axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data)
        config.headers = {
            "Content-Type": "application/json",
        };
        console.log('config:', config)
        return config
    },
    (error) => {
        console.log('requsetError:', error)
        return Promise.reject(error)
    }
)

/**
 * http response handler
 */
axios.interceptors.response.use(
    (response) => {
        console.log('response:', response)
        return response;
    },
    (error) => {
        console.log("responseError", error);
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
        axios.get(url, {
            params: params,
        }).then((response) => {
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
        axios.post(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}