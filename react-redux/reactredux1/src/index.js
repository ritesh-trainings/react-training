import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import BookStore from './components/bookstoreapp'
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BookStore />
    </Provider>, document.getElementById('app'));