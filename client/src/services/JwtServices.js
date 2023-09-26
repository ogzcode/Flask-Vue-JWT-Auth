const TOKEN_KEY = 'flask_vue_jwt_auth_token';

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const saveToken = (token) => {
    return localStorage.setItem(TOKEN_KEY, token);

}

export const destroyToken = () => {
    return localStorage.removeItem(TOKEN_KEY);
}

