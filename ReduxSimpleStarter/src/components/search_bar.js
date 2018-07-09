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
   * All React components must define a .render() method
   * which returns JSX
   */
  render() {
    return <input onChange= { this.onInputChange } />;
  }

  /**
   * Event handler for input change
   */
  onInputChange() {

  }
}

export default SearchBar;
