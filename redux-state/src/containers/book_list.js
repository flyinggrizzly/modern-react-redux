import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-smr-4">
        { this.renderList }
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

// Export a container defined by connecting a state map to a component
export default connect(mapStateToProps)(BookList);
