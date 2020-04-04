import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/style.css'
import logo from '../styles/images/Troubleshoot (3).png'
import '../styles/style.css'
import {logoutUser} from '../actions/userActions'
import { connect } from 'react-redux'

// const link = {
//     float: 'left',
//     display: 'block',
//     color: '#501b1d',
//     textAlign: 'center',
//     padding: '25px 16px',
//     textDecoration: 'none',
//     fontFamily: '"Barlow Thin", sans-serif',
//     backgroundColor: '#bcd9bb' 
// }  



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
          <div>
            <header>
              <div>
              <img src={logo} 
              className='logo'
               alt='logo' 
               >  
               </img>
            <li>
              <NavLink
               to="/" exact
            className='navbar-link' 
            activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
            >Home</NavLink>
            </li>
            <li>
            <NavLink
              exact to="/profile"
              className='navbar-link' 
              activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
            >Profile</NavLink>
            </li>
            <li>
            <NavLink
              exact to="/login"
              className='navbar-link' 
              activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
            >Login</NavLink>
            </li>
            <li>
            <NavLink
              exact to="/signup"
              className='navbar-link' 
              activeStyle={{
                backgroundColor: '#501b1d',
                color: '#dbaa5c'
                }}
            >Signup</NavLink>
            </li><li>
            <NavLink exact to="/" 
            onClick={this.handleClick} 
            activeStyle={{
              backgroundColor: '#501b1d',
              color: '#dbaa5c'
            }}
            className='navbar-link' 
            >Log Out</NavLink>
            </li>
            </div>
            </header>
          </div>
        </>
        )
      }
    }

    const mapDispatchToProps = dispatch => ({
      logoutUser: () => dispatch(logoutUser())
    })

    export default connect(null, mapDispatchToProps)(NavbarContainer)