import React, {Component} from 'react'
import placeholder from '../styles/images/bg-01.jpg'

const styling = {
    margin: '10px',
    backgroundColor: 'white',
    padding: '20px',
    flex: '0 0 33%',
    listStyle: 'none',
    border: '1px solid #c2a678'
}
const imgStyling = {
    maxWidth: '100%'
}

const userStyling = {
    fontFamily: 'Arvo',
    fontWeight: '300'
}

export default class Location extends Component{
  
    render(){
        return(
            <div style={styling}>
                <h3>{this.props.name}</h3>
                    <p style={userStyling}>Posted by: {this.props.user}</p>
                
                <img src={placeholder} alt='' style={imgStyling}></img>
                <p>{this.props.content}</p>
            </div>
        )
    }
    



}
