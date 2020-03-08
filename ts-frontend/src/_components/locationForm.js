import React from 'react'
import { connect } from 'react-redux'

import { fetchUpdateLocations } from '../actions/fetchUpdateLocations'

class LocationForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            id: this.props.location.state.id,
            name: this.props.location.state.name,
            content: this.props.location.state.content,
            address: this.props.location.state.address,
            user_id: this.props.location.state.user_id,
            toHome: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {name, content, address, id, user_id} = this.state
        const data = {
            name,
            content,
            address,
            id,
            user_id
        }
        this.props.update(data)
        this.props.history.push('/')
    }

    handleChange = (e) => {
        e.persist()
        let value = e.target.value
        this.setState({
            [e.target.name]: value
        })
        
    }

    render() {
        console.log(this.state)
        return (
            <div className="bg-contact3">

                <div className="container-contact3">
                    <div className="wrap-contact3">

                        <form className="contact3-form validate-form" id={this.state.id ? 'edit' : 'new'}>
                            <span className="contact3-form-title">
                                Location Form
                            </span>

                            <div className="wrap-input3 validate-input" data-validate="Name is required">
                                <label htmlFor="name">Location Name</label>
                                <input className="input3" type="text" name="name" id="name" onChange={(e) => this.handleChange(e)} value={this.state.name ? this.state.name : ''} required ></input>
                                <span className="focus-input3"></span>
                            </div>

                            <div className="wrap-input3 validate-input">
                                <label htmlFor="content">Tell us about your spot:</label>
                                <textarea form='add-this.props.location-form' className="input3" name="content"
                                    onChange={(e) => this.handleChange(e)}
                                    value={this.state.content ? this.state.content : ''} required >
                                </textarea>
                                <span className="focus-input3"></span>
                            </div>

                            <div className="wrap-input3 validate-input" data-validate="Address is required">
                                <label htmlFor="address">Address</label>
                                <input className="input3" type="text" name="address" id="address"
                                    onChange={(e) => this.handleChange(e)}
                                    value={this.state.address ? this.state.address : ''} ></input>
                                <span className="focus-input3"></span>
                            </div>
                            {this.state.id ? <input type="hidden" name='id' value={this.state.id}></input> : ''}
                            <input type="hidden" name='user_id' value={this.state.user_id}></input>

                            <div className="container-contact3-form-btn">
                                <button type="submit" className="contact3-form-btn" onClick={this.handleSubmit}>
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

const mapDispatchToProps = (dispatch) => {
    return {update: (data) => dispatch(fetchUpdateLocations(data))}
}
export default connect(null, mapDispatchToProps)(LocationForm)
