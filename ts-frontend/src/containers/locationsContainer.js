import React, { Component } from 'react'
import Location from '../presentationalComponents/Location'

const styling = {
    display: 'flex', 
    flexWrap: 'wrap', 
    margin: '25px',
    listStyle: 'none'
}
export default class LocationsContainer extends Component {
 
    render() {

        const mappedLocations =  this.props.locations.map(loc => 
        <Location key={loc.id} name={loc.name} content={loc.content} user={loc.user.first_name}/>
        )

        return(
            <div style={styling}>
                {mappedLocations}
            </div>
        ) 
        
    }
}

