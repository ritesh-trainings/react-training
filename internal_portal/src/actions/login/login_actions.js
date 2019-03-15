import axios from 'axios';

export function authLogin(user) {
    const response = axios.get('../../../data/users.json').then((resp) => ({
        "type": "LOGIN",
        "payload": resp.data,
        "user": user
    }));
    return response;
}

export function forgotPwd(username) {
    const response = axios.get('../../../data/users.json').then((resp) => ({
        "type": "LOGIN",
        "payload": resp.data,
        "user": user
    }));
    return response;
}