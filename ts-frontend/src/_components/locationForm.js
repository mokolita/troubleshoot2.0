import React from 'react'
import { connect } from 'react-redux'

import { UPDATE_LOCATION } from '../actions/actions'

class LocationForm extends React.Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         name: '',
    //         content: '',
    //         address: '',
    //         user_id: ''
    //     }
    // }
    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        e.persist()
        let value = e.target.value
        this.setState({
            [e.target.name]: value
        })
        console.log(e.target.value)
    }

    render(){
        return(
       <div className="bg-contact3">
         
       <div className="container-contact3">
         <div className="wrap-contact3">
           
           <form className="contact3-form validate-form" id={this.props.location.state.id ? 'edit' : 'new'}>
             <span className="contact3-form-title">
                 Location Form
             </span> 
             
             <div className="wrap-input3 validate-input" data-validate="Name is required">
               <label htmlFor="name">Location Name</label>
               <input className="input3" type="text" name="name" id="name" onChange={(e) => this.handleChange(e)} value={this.props.location.state.name ? this.props.location.state.name : ''} required ></input>
                 <span className="focus-input3"></span>
             </div>
     
             <div className="wrap-input3 validate-input">
               <label htmlFor="content">Tell us about your spot:</label>
               <textarea form='add-this.props.location-form' className="input3" name="content" 
               onChange={(e) => this.handleChange(e)} 
               value={this.props.location.state.content ? this.props.location.state.content : ''} required >
               </textarea>
                 <span className="focus-input3"></span>
             </div>
     
             <div className="wrap-input3 validate-input" data-validate = "Address is required">
                 <label htmlFor="address">Address</label>
                 <input className="input3" type="text" name="address" id="address"  onChange={(e) => this.handleChange(e)} value={this.props.location.state.address ? this.props.location.state.address : ''} ></input>
                  <span className="focus-input3"></span>
             </div>
             {this.props.location.state.id ? <input type="hidden" name='id' value={this.props.location.state.id}></input>: ''}
              <input type="hidden" name='user_id' value={this.props.location.state.user_id}></input>

             <div className="container-contact3-form-btn">
               <button className="contact3-form-btn" onSubmit={(event) => this.handleSubmit(event)}>
                 Submit
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: () => { dispatch(UPDATE_LOCATION) }
    }
}
export default connect(mapDispatchToProps)(LocationForm)
