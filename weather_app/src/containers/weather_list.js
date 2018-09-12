import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

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
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }

  renderWeather(cityData) {
    var key_timestamp = Date.now();
    const name = cityData.city.name;

    const temperatures = cityData.list.map(datum => datum.main.temp);
    const pressures = cityData.list.map(datum => datum.main.pressure);
    const humidities = cityData.list.map(datum => datum.main.humidity);

    return(
      <tr key={ name + key_timestamp }>
        <td>{ name }</td>
        <td><Chart data={ temperatures } color={ 'orange' } /></td>
        <td><Chart data={ pressures } color={ 'green' } /></td>
        <td><Chart data={ humidities } color={ 'black' } /></td>
      </tr>
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
