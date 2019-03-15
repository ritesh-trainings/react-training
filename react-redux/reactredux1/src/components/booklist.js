import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectBook} from '../actions/my_action';

class BookList extends Component {

    renderList() {
        return this.props.myBooks.map((book) => {
            return (<li key={book.title} className='list-group-item' onClick={()=>this.props.sb(book)}>{book.title}</li>);
        });
    };

    render() {
        return (
            <ul className='list-group col-sm-4'>
                <li className='list-group-item text-muted'>Books</li>
                {this.renderList()}
            </ul>
        );
    };
};

function mapStateToProps(state) {
    return { myBooks: state.books }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({sb : selectBook}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);