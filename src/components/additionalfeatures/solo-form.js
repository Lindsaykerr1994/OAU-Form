import React, { Component } from 'react';
import $ from 'jquery';

import DateOfBirthInput from './date-of-birth-form.js';

class SoloForm extends Component {
    disableDec() {
        if($("#solo-no-dec").is(':checked')){
            $("#solo-injury-details").attr("disabled", true);
            $("#solo-medicine-details").attr("disabled", true);
        } else {
            $("#solo-injury-details").attr("disabled", false);
            $("#solo-medicine-details").attr("disabled", false);
        }
    }
    render(){
        return(
            <div className={"client-form font-futura "+(this.props.displayGroup ? "display-group" : "")} 
            id='client-solo'>
                <div>
                    <p className="inline-block">Personal Details</p> 
                </div>   
                <div className="form-container">
                    <div className="form-input text-input w-75 inline-block">
                        <input type="text"
                            name="name-input"
                            id="solo-name"
                            placeholder="Name"></input>
                    </div>
                    <DateOfBirthInput />
                    <div className="form-input text-input w-75 inline-block">
                        <input type="text"
                            name="address-input"
                            id="solo-address"
                            placeholder="Address"></input>
                    </div>
                    <div className="form-input text-input w-25 inline-block">
                        <input type="text"
                            minLength="5"
                            maxLength="7"
                            name="postcode-input"
                            id="solo-postcode"
                            placeholder="Postcode"></input>
                    </div>
                    <div className="form-input text-input w-50 inline-block">
                        <input type="text"
                            name="phone-input"
                            id="solo-phone"
                            placeholder="Phone Number"></input>
                    </div>
                    <div className="form-input text-input w-50 inline-block">
                        <input type="text"
                            name="email-input"
                            id="solo-email"
                            placeholder="Email Address"></input>
                    </div>
                    <div>
                        <p className="font-12 font-futura-light">The booking will be made under these details</p>
                    </div>
                    <div>
                        <p className="inline-block">Emergency Contact</p>
                    </div>
                    <div className="emergency-contact-div">
                        <div className="form-input text-input">
                            <input type="text"
                                id="solo-emergency-name"
                                name="emergency-name"
                                placeholder="Emergency Contact Name"></input>
                        </div>
                        <div className="form-input text-input">
                            <input type="text"
                                id="solo-emergency-number"
                                name="emergency-number"
                                placeholder="Emergency Contact Phone Number"></input>
                        </div>
                    </div>
                    <div>
                        <p className="inline-block">Declaration Of Fitness</p>
                    </div>
                    <div className="form-input text-input">
                        <input type="text"
                            name="injury-conditions"
                            id="solo-injury-details"
                            placeholder="Please declare any recent or ongoing injury/condition/illness"
                            ></input>
                    </div>
                    <div className="form-input text-input">
                        <input type="text"
                            name="medications"
                            id="solo-medicine-details"
                            placeholder="Please declare any medication recently or currently taken"></input>
                    </div>
                    <div className="ml-31"
                        id="no-declaration-container">
                        <input 
                            type="checkbox"
                            name="no-declaration"
                            id="solo-no-dec"
                            onChange={this.disableDec}
                            ></input>
                        <label 
                            htmlFor="no-declaration"
                            className="font-12 font-futura-light">
                            I certify that to the best of my knowledge I do not suffer from a medical condition which might have the effect of making it more likely that I could be involved in an accident resulting in injury to myself or others.
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default SoloForm;