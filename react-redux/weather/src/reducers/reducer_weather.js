import { FETCH_WEATHER } from '../actions/api_call';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            if (action.payload.data.cod === '200')
                return [action.payload.data, ...state];
    }
    return state;
}