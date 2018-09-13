import React, { Component } from 'react';

export default class MapEmbed extends Component {
  render() {
    return <div ref='map_embed'></div>;
  }

  componentDidMount() {
    new google.maps.Map(this.refs.map_embed, {
      zoom: 12,
      center: {
        lat: this.props.latitude,
        lng: this.props.longitude
      }
    });
  }
}
