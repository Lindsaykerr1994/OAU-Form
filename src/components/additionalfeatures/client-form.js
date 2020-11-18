import React, { Component } from 'react';
import DateOfBirthInput from './date-of-birth-form.js';

import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

class GroupParticipantForm extends Component {
    render(){
        return(
            <div className="group-participants">
                <p className="inline-block">Participants' Details</p>
                <div 
                    className="number-button inline-block"
                    onClick={this.props.increaseNumber}>
                    <FaPlus />
                </div>
                <div 
                    className="number-button inline-block"
                    onClick={this.props.decreaseNumber}>
                    <FaMinus />
                </div>
                {Array.from(Array(this.props.clientNumber)).map((x,index) =>
                    <div
                        key={index}
                        className="group-participant-form"
                        id={'group-part-'+(index)}>
                        <div className="form-input text-input w-75 inline-block">
                            <input type="text"
                                name="name-input"
                                placeholder="Name"></input>
                        </div>
                        <DateOfBirthInput 
                    key={index}/>
                        <div className="form-input text-input">
                            <input type="text"
                                name="injury-conditions"
                                placeholder="Declaration of Relevant Medicine Condition or Medicine Taken"></input>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default GroupParticipantForm;