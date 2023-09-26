import { request } from './RequestServices';

export const Login = (email, password) => {
    return request({
        url: '/login',
        method: 'POST',
        data: {
            email,
            password
        }
    })
}

export const Signup = (email, password) => {
    return request({
        url: '/signup',
        method: 'POST',
        data: {
            email,
            password
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