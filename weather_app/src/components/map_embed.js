import React, { Component } from 'react';

export default class MapEmbed extends Component {
  render() {
    return <div ref='map_embed' />;
  }

  componentDidMount() {
    new google.maps.Map(this.refs.map_embed, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
}
