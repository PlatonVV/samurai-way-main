import axios from 'axios';

 const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f99f2a4e-ec6a-4556-b10d-38019e7780d8',
    },
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)},
    followUser(userId: string) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unFollowUser(userId: string) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    auth () {
        return axios.get(`auth/me`).then(response => response.data)
    }
}
