import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    // Bind context of onInputChange to this object
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render () {
    return (
      <form
        className='input-group'
        onSubmit={ this.onFormSubmit } >

        <input
          placeholder='Get a 5 day forecast in your favorite cities'
          className='form-control'
          value={ this.state.term }
          onChange={ this.onInputChange } />

        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Fetch weather data
    this.props.fetchWeather(this.state.term);
    // Clear search input
    this.setState({ term: '' });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Only mapping outbound state updates. Null is the first argument because we don't need to consume redux state.
export default connect(null, mapDispatchToProps)(SearchBar);
