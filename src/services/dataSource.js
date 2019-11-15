/**Libraries */
import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_ROOT_URL,
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Access-Control-Allow-Origin": "*"
    }
});

const dataSource = (options) => {
    const onSuccess = (response) => {
        if (!!response && !!response.data) {
            return Promise.resolve(response);
        } else {
            return response.data;
        }
    };

    const onError = (error) => {
        if (!!error && error.response) {
            // Request was made but server responded with something
            // other than 2xx
            alert("request is made but server response is not 200");
        } else {
            // Something else happened while setting up the request
            // triggered the error
            alert("Something was bad on the request");
        }

        return Promise.reject(error.response || error.message);
    };

    if (options.config && options.config.handleError === false) {
        return client(options).then(onSuccess);
    }

    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export default dataSource;
