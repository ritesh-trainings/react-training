import { FETCH_USER } from '../actions/actions';

export default function (state = [], action) {
    console.log("Action: ", action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload.data;
    }
    return state;
}