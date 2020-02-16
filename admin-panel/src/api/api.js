import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e04246ba-f87a-4b1b-8ed1-1cca2bbb1a19"
    }
});

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`)
    }
};