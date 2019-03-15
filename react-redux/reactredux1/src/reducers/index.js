import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import CarsReducer from './reducer_cars';
import ActiveBook from './reducer_active_book';
import ActiveCar from './reducer_active_car';

const rootReducer = combineReducers({
    books : BooksReducer,
    cars : CarsReducer,
    activeBook : ActiveBook,
    activeCar : ActiveCar
});

export default rootReducer;

