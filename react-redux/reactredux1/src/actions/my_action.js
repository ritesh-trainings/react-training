export function selectBook(book){
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
};

export function addBook(book){
    return {
        type: 'BOOK_ADDED',
        payload: book
    };
};



export function selectCar(car){
    return {
        type: 'CAR_SELECTED',
        payload: car
    };
};