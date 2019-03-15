import axios from 'axios';

const API_KEY = '2af59aa6a3e7a09b7dca1037d80e6e8e'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);
    // request.then((resp) => console.log('Request:', resp))
        // .catch((error) => console.log('Error: ', error));
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}