import React, { Component } from 'react';

/**
 * Class-based component implementation.
 *
 * A class-based component can introspect
 * itself, and report internal changes to
 * the rest of the application. This is useful
 * for, say, a search box that needs to report
 * user input.
 */
class SearchBar extends Component {
  /**
   * Define constructor method
   *
   * If a component is going to have statefulness, the
   * state object (a JS object that is an attribute of
   * the React component) needs to be initialized with
   * the component
   */
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  /**
   * All React components must define a .render() method
   * which returns JSX
   */
  render() {
    return (
      <div>
        <input onChange={ event => this.setState({ searchTerm: event.target.value }) } />
      </div>
    );
  }
}

export default SearchBar;
