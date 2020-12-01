import React, { Component } from 'react';

class BookingDetails extends Component {
    render(){
        return(
            <div className={"client-form font-futura "+(this.props.displayGroup ? "display-group" : "")} 
            id='client-solo'>
                <div>
                    <p className="inline-block">Personal Details</p> 
                </div>   
                <div className="form-container">
                    <div className="form-input text-input ml-31 inline-block">
                        <input type="text"
                            name="name-input"
                            id="name-input"
                            placeholder="Name"></input>
                    </div>
                    <div className="form-input text-input w-75 inline-block">
                        <input type="text"
                            name="address-input"
                            id="address-input"
                            placeholder="Address"></input>
                    </div>
                    <div className="form-input text-input w-25 inline-block">
                        <input type="text"
                            minLength="5"
                            maxLength="7"
                            name="postcode-input"
                            id="postcode-input"
                            placeholder="Postcode"></input>
                    </div>
                    <div className="form-input text-input w-50 ml-31 inline-block">
                        <input type="text"
                            name="phone-input"
                            id="phone-input"
                            placeholder="Phone Number"></input>
                    </div>
                    <div className="form-input text-input w-50 ml-10 inline-block">
                        <input type="text"
                            name="email-input"
                            id="email-input"
                            placeholder="Email Address"></input>
                    </div>
                    <div>
                        <p className="font-12 font-futura-light">The booking will be made under these details</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookingDetails;