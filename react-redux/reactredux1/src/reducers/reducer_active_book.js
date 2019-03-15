export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        case 'BOOK_ADDED':
            return Object.assign({},state,action.payload);
        default:
            return state;
    }
}