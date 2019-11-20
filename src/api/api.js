import * as axios from "axios/index";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': 'd43e15b9-435b-40a7-9259-6f14fee4e1f4'
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
    }
};

export const profileApi = {
    getUserProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then( response => response.data )
    },
    updateUserStatus: (status) => {
        return instance.put(`profile/status`, { status: status })
            .then( response => response.data )
    },
    getUserStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
            .then( response => response.data )
    }
};

export const authApi = {
    checkUserAuth: () => {
        return instance.get('auth/me')
            .then( response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }

};