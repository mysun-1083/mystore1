import axios from 'axios'
const IP = "http://127.0.0.1:3000"

// const ax = axios.create({
//     baseURL:"http://127.0.0.1:3000"
// })

export function checkLogin(param){
    return  axios.post(IP + '/login',param)
}

export function addAccount(params){
    return  axios.post(IP + '/accadd',params)
}