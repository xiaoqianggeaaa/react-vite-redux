import axios from 'axios';
const mode = import.meta.env.MODE
let pmsusertoken = sessionStorage.getItem('pmsusertoken') || null
const instance = axios.create({
    method: 'post', // default
    baseURL: mode !== 'development' ? import.meta.env.VITE_APP_API_BASE_URL : '',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        pmsusertoken: pmsusertoken
    },

    timeout: 60000,
    responseType: 'json', // default
    maxRedirects: 0, // default
});
instance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.data.code === '400401') {

    } else {
    }
    return Promise.reject({
        isSuccess: false,
        msg: error.response.statusText,
        exception: [error.response.status, error.response.statusText, error.response.request.responseURL].join(" "),
        data: undefined,
        total: undefined,
        data: error.response.statusText,
    });
});
export default instance;