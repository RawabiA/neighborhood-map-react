import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 26.05961203, lng: 43.55852369 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 26.05961203, lng: 43.55852369 }} />}
  </GoogleMap>
))

class Map extends Component {
state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
<MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnZYx7opXJLtdYvFTOoO3N92ohZfxDXQI&v=3.exp&libraries=geometry,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
    )
  }
}

export default Map;