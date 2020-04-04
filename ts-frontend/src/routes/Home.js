import React from 'react';
import { connect } from 'react-redux'

import LocationsContainer from '../containers/locationsContainer'
import MapsContainer from '../containers/mapsContainer'
import NavbarContainer from '../containers/navbarContainer'
import { fetchLocations } from '../actions/fetchLocations'


class Home extends React.Component {
  
  componentDidMount() {
    this.props.fetchLocations()
  }
  render() {
    
    return(
      <div>
        <NavbarContainer />
        <div id='page-container'>
          <body>
            <main>
        <LocationsContainer locations={this.props.locations.locations} />
        <MapsContainer locations={this.props.locations.locations}/>
          </main>
        </body>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ locations }) => ({ locations })

const mapDispatchToProps = (dispatch) => {
  return {fetchLocations: () =>  dispatch(fetchLocations())}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home)