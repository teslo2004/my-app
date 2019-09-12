import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "ea7de8a2-84fd-4d90-9506-07ae7f3a2060"
     }

})

export const UsersAPI ={getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
}}