import { request } from './RequestServices';

export const Login = (username, password) => {
    return request({
        url: '/login',
        method: 'POST',
        data: {
            username,
            password
        }
    })
}

export const Signup = (email, password, username) => {
    return request({
        url: '/signup',
        method: 'POST',
        data: {
            email,
            password,
            username
        }
    })
}

export const Logout = () => {
    return request({
        url: '/logout',
        method: 'POST'
    })
}

export const GetProfile = () => {
    return request({
        url: '/protected',
        method: 'GET'
    })
}