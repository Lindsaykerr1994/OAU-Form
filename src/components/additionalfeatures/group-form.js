import React, { Component } from 'react';

import GroupParticipantForm from './client-form.js'

class GroupForm extends Component {
    render() {
        return (
            <div className={"client-form font-futura "+(this.props.displayGroup ? "" : "display-group")} 
            id='client-group'>
                <div>
                    <p className="inline-block">Details Of Person Responsible For Booking</p>
                </div>
                <div className="form-container">
                    <div className="form-input text-input">
                        <input type="text"
                            name="name-input"
                            id="booking-name"
                            placeholder="Name"></input>
                    </div>
                    <div className="form-input text-input w-75 inline-block">
                        <input type="text"
                            name="address-input"
                            id="booking-address"
                            placeholder="Address"></input>
                    </div>
                    <div className="form-input text-input w-25 inline-block">
                        <input type="text"
                            minLength="5"
                            maxLength="7"
                            name="postcode-input"
                            id="booking-postcode"
                            placeholder="Postcode"></input>
                    </div>
                    <div className="form-input text-input w-50 ml-31 inline-block">
                        <input type="text"
                            name="phone-input"
                            id="booking-phone"
                            placeholder="Phone Number"></input>
                    </div>
                    <div className="form-input text-input w-50 ml-10 inline-block">
                        <input type="text"
                            name="email-input"
                            id="booking-email"
                            placeholder="Email Address"></input>
                    </div>
                     <div>
                        <p className="inline-block">Emergency Contact Details</p>
                    </div>
                    <div className='emergency-contact-div'>
                        <div className="form-input text-input w-50 inline-block">
                            <input type="text"
                                className=""
                                name="group-emergency-name"
                                id="group-emergency-name"
                                placeholder="Name"></input>
                        </div>
                        <div className="form-input text-input w-50 inline-block">
                            <input type="text"
                                className=""
                                name="group-emergency-number"
                                id="group-emergency-number"
                                placeholder="Phone Number"></input>
                        </div>
                    </div>
                    <GroupParticipantForm 
                        increaseNumber={this.props.increaseNumber}
                        decreaseNumber={this.props.decreaseNumber}
                        clientNumber={this.props.clientNumber}
                    />
                </div>
            </div>
        )
    }
}

export default GroupForm