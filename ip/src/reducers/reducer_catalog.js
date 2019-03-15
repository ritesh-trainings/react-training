import { FETCH_CATALOG } from '../actions/actions';

export default function (state = [], action) {
    console.log("Action: ", action);
    switch (action.type) {
        case FETCH_CATALOG:
            return action.payload;
    }
    return state;
}