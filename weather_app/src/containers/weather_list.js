import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
}

// Don't forget that when you have an object with a key, and that's all you want, you can
// dereference that value in the argument definition:
// function myFunction(state) { weather = state.weather; }
// is equivalent to
// function myFunction({ weather }) { //do more stuff }
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
