import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

import '../../css/group-switch.css';

class GroupSwitch extends Component {
    render(){
        return(
        <div id="group-switch-container">
            <div 
                id="group-switch"
                className="inline-block">
                <div>
                    <p className="inline-block font-15 font-futura"
                        onClick={this.props.toOTO}>One To One</p>
                    <label className="switch">
                        <input 
                            id="group-checkbox"
                            type="checkbox"
                            onClick={this.props.toggleGroup}
                        ></input>
                        <span className="slider round"></span>
                    </label>
                    <p className="inline-block font-15 font-futura"
                        onClick={this.props.toGroup}>Group</p>
                </div>
            </div>
            <div id="participant-number-container"
                className={this.props.displayGroup ? "" : "display-group"}>
                <div 
                    className="number-button inline-block"
                    onClick={this.props.decreaseNumber}>
                    <FaMinus />
                </div>
                <p className="font-15 font-futura inline-block">Number Of Participants: {this.props.clientNumber}</p>
                <div 
                    className="number-button inline-block"
                    onClick={this.props.increaseNumber}>
                    <FaPlus />
                </div>
            </div>
        </div>
        )
    }
}
export default GroupSwitch;