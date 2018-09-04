import { combineReducers } from 'redux';

import BooksReducer from './books_reducer.js';
import ActiveBookReducer from './active_book_reducer.js';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
