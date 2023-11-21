import axios from './apiConfig'

const mode = import.meta.env.MODE
console.log(mode)
function post({ url, params = {} }, configs, dispatch) {
    dispatch({dashData:{aa:'cc'} ,type: 'INCREMENT'})
    if(mode !=='development') {
        url = url.replace(/^\/api/, "")
    }

    return axios.post(url, JSON.stringify(params), { headers:  {
        'Content-Type': 'application/json',
        pmsusertoken: sessionStorage.getItem('pmsusertoken') || null
    } }).then(res => res.data)
}
function get({ url, params }) {
    if(mode !=='development') {
        url = url.replace(/^\/api/, "")
    }
    url += '?' + Object.keys(params || {}).map(key => {
        return `${key}=${params[key]}`
    }).join('&')
    return axios.get(url,  { headers:  {
        'Content-Type': 'application/json',
        pmsusertoken: sessionStorage.getItem('pmsusertoken') || null
    } })
}
export default {
    post,
    get
}