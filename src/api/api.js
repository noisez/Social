import * as axios from "axios/index";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'af1e21e3-6554-44d4-bd44-b7cae6eebac6'
    }
});

export const usersApi = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( response => response.data )
    },

    followUser: (userId) => {
        return instance.post(`follow/${userId}`, {})
            .then( response => response.data )
    },

    unfollowUser: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then( response => response.data )
    },

    getUserProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then( response => response.data )
    },

    checkUserAuth: () => {
        return instance.get('auth/me').then( response => response.data)
    }
};