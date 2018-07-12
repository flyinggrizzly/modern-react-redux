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
  /**
   * Setting the value of the component equal to the state converts it to a
   * 'controlled component'.
   *
   * This overrides and effectively reimplements default HTML behavior: when
   * a user enters data to the input element, the React component is not allowing
   * that to change the input's value attribute--that is hard-set to be the
   * component's state.
   *
   * Instead, data entry triggers the onChange event handler, which updates the
   * component's state and triggers a rerender. The render looks up the state
   * for the component and renders that in as the value of the component.
   *
   * This effectively decouples data entry and presentation, which opens up a lot
   * of options, like real-time validation, and more certainty when referencing
   * values.
   *
   * Also, you can screw with people. And say, rot13 their input.
   */
  render() {
    return (
      <div>
        <input
          value={this.state.searchTerm}
          onChange={ event => this.setState({ searchTerm: event.target.value }) } />
      </div>
    );
  }
}

export default SearchBar;
