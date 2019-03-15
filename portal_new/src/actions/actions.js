import axios from "axios";

const ROOT_URL = 'http://172.27.21.150:8080';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_CATALOG = 'FETCH_CATALOG';

export function fetchUserData(userId) {
    const url = `${ROOT_URL}/MyCards`;
    const response = axios.post(url, { "userId": userId });
    return {
        type: FETCH_USER,
        payload: response
    }
}

export function fetchCatalog() {
    const url = `${ROOT_URL}/CardCatalogue`;
    const response = axios.get(url); return {
        type: FETCH_CATALOG,
        payload: response
    }
}
