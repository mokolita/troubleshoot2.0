import React from 'react';
import { connect } from 'react-redux'

import LocationsContainer from '../containers/locationsContainer'
import MapsContainer from '../containers/mapsContainer'
import NavbarContainer from '../containers/navbarContainer'
import { fetchLocations } from '../actions/fetchLocations'

const styling = {
  marginTop: '100px'
}

class Home extends React.Component {
  
  componentDidMount() {
    this.props.fetchLocations()
  }
  render() {
    

    return(
      <div style={styling}>
        <NavbarContainer />
        <LocationsContainer locations={this.props.locations.locations}/>
        <MapsContainer />
      </div>
    )
  }
}

const mapStateToProps = ({ locations }) => ({ locations })

const mapDispatchToProps = (dispatch) => {
  return {fetchLocations: () => dispatch(fetchLocations())}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home)