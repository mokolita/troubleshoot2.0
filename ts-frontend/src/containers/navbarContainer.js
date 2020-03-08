import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/style.css'
import logo from '../styles/images/Troubleshoot (3).png'
import {logoutUser} from '../actions/userActions'
import { connect } from 'react-redux'

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



class NavbarContainer extends Component {

    handleClick = (e) => {
      e.preventDefault() 
      localStorage.removeItem('token')
      this.props.logoutUser()
      window.location.replace('/')
      
    }


   
    render() {
        return (
        <>
          <div className='header-navbar'>
              <img src={logo} 
              className='logo'
               alt='logo' 
               style={link}></img>
            <NavLink
               to="/" exact
            className='link'
            style={link} 
            activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
            >Home</NavLink>
            <NavLink
              exact to="/profile"
              className='link'
              style={link} 
              activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
            >Profile</NavLink>
            <NavLink
              exact to="/login"
              style={link} 
              activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
              className='link link-style'
            >Login</NavLink>
            <NavLink
              exact to="/signup"
              style={link} 
              activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
              className='link link-style'
            >Signup</NavLink>
            <NavLink exact to="/" 
            onClick={this.handleClick} 
            style={link}
            className='link link-style'>Log Out</NavLink>
          </div>
        </>
        )
      }
    }

    const mapDispatchToProps = dispatch => ({
      logoutUser: () => dispatch(logoutUser())
    })

    export default connect(null, mapDispatchToProps)(NavbarContainer)