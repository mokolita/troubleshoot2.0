import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/style.css'
import logo from '../styles/images/Troubleshoot (3).png'
import {logoutUser} from '../actions/userActions'

const link = {
    float: 'left',
    display: 'block',
    color: '#501b1d',
    textAlign: 'center',
    padding: '25px 16px',
    textDecoration: 'none',
    fontFamily: '"Barlow Thin", sans-serif',
    backgroundColor: '#bcd9bb' 
}  



export default class NavbarContainer extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         hover:false 
    //     }
    // }

    // toggleHover = () => {
    //     this.setState({hover: true})
    //     this.link()
    // }

    handleClick = (e) => {

    }


   
    render() {
        return (
        <>
          <div className='header-navbar'>
              <img src={logo} className='logo' alt='logo' style={link}></img>
            <NavLink
               to="/" exact
            className='link'
            style={link} 
            activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
            //onMouseEnter={this.toggleHover}
            //onMouseLeave={this.toggleHover}
            >Home</NavLink>
            <NavLink
              exact to="/profile"
              className='link'
              style={link} 
              activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
              //onMouseEnter={this.toggleHover}
              //onMouseLeave={this.toggleHover}
            >Profile</NavLink>
            <NavLink
              exact to="/login"
              style={link} 
              activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
              className='link link-style'
              //onMouseEnter={this.toggleHover}
              //onMouseLeave={this.toggleHover}
            >Login</NavLink>
            <NavLink
              exact to="/signup"
              style={link} 
              activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
              className='link link-style'
              //onMouseEnter={this.toggleHover}
              //onMouseLeave={this.toggleHover}
            >Signup</NavLink>
            <NavLink onClick={this.handleClick}>Log Out</NavLink>
          </div>
        </>
        )
      }
    }

    const mapDispatchToProps = dispatch => ({
      logoutUser: () => dispatch(logoutUser())
    })
