import React, { Component } from 'react'
import BookList from './booklist';
import CarList from './carList';
import BookDetails from './book_details';
import CarDetails from './car_details';

class BookStore extends Component {
    render() {
        return (
            <div>
                <div className='h3'>Welcome to Store</div>

                <div className='row'>
                    <BookList />
                    <BookDetails />
                </div>
                <div className='row'>
                <br/>
                    <CarList />
                    <CarDetails />
                </div>
            </div>
        );
    };
};

export default BookStore;