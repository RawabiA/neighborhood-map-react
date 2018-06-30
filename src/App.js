import React, { Component } from 'react';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Map from'./Map';




class App extends Component {


  render() {
    return (
<Map
/>
    )
  }
}

export default App;
