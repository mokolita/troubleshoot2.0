import React, { Component } from 'react'
//import placeholder from '../styles/images/bg-01.jpg'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const styling = {
    // position: 'sticky',
    // top: '130px',
    // right: '1px',  
    // width: '450px',
    // marginTop: '40px',
    // border: '5px solid #c2a678'
    width: '50%',
    height: '50%'

}

class MapsContainer extends Component {

    displayMarkers = () => {
        return this.props.locations.map(loc =>  
        <Marker key={loc.id} id={loc.id} position={{
            lat: loc.latitude,
            lng: loc.longitude
        }}
        onClick={() => console.log("you clicked")}/>)
    }   
 
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={styling}
              initialCenter={{ lat: 39.113014, lng: -105.358887}}
            >
                {this.displayMarkers()}
            </Map>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAkE_T6_RyBAdnex9VyBsJhI1C2ehhnkfE'
  })(MapsContainer);