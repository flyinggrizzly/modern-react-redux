import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook  } from '../actions/index';

class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-smr-4">
        { this.renderList() }
      </ul>
    )
  }

  renderList() {
    return this.props.books.map( (book) => {
      return (
        <li key="{book.title}" className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
}

/*
 * Tell ReactRedux::connect how to map state to props in the component.
 */
function mapStateToProps(state) {
  // Whatever is returned here will be available as props in
  // BookList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props on
// the book list container, so that in BookList we can call
// this.props.selectBook
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Export a container defined by connecting a state map to a component
// The return values of the first arguments will be addes as props to the
// component constant (last argument)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
