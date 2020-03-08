import React, {Component} from 'react'
import placeholder from '../styles/images/bg-01.jpg'
import {  Link, withRouter } from 'react-router-dom'

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

// const userStyling = {
//     fontFamily: 'Arvo',
//     fontWeight: '300'
// }

class ProfileLocation extends Component{
  
    render(){
        return(
            <div style={styling}>
                <h3>{this.props.name}</h3>
                <div className="container-contact3-form-btn">
                <Link className="contact3-form-btn"
                to={{
                    pathname: `users/${this.props.user_id}/locations/${this.props.id}/edit`,
                    state: {
                        id: this.props.id,
                        name: this.props.name,
                        content: this.props.content,
                        address: this.props.address,
                        user_id: this.props.user_id
                    }
                }} >
                Update
                </Link>
                <Link className='contact3-form-btn'
                    to={{
                        pathname: `users/${this.props.user_id}/locations/${this.props.id}`,
                        state: {
                            id: this.props.id
                        }
                    }}>
                Delete</Link>
                </div>
                <img src={placeholder} alt='' style={imgStyling}></img>
                <p>{this.props.content}</p>
            </div>
        )
    }
    



}
export default withRouter(ProfileLocation)