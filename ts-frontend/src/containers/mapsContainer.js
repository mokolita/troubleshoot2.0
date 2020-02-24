import React, { Component } from 'react'
import placeholder from '../styles/images/bg-01.jpg'

const styling = {
    position: 'sticky',
    top: '130px',
    right: '1px',  
    width: '450px',
    marginTop: '40px',
    border: '5px solid #c2a678'
}

export default class MapsContainer extends Component {

    
 
    render() {
        return(
            <div style={styling}>
            <img src={placeholder} alt=''></img>
            </div>
        ) 
        
    }
}