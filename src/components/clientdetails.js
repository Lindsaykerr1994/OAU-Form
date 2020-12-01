import React, { Component } from 'react';
import $ from 'jquery';

import GroupSwitch from './additionalfeatures/group-switch.js';
import BookingDetails from './additionalfeatures/client-details.js';

import '../css/buttons.css';

class ClientDetails extends Component {
    constructor() {
        super();
        this.state = {
            displayGroup: false,
            clientNumber: 2
        }
        this.toggleGroup = this.toggleGroup.bind(this);
        this.toGroup = this.toGroup.bind(this);
        this.toOTO = this.toOTO.bind(this);
        this.increaseNumber = this.increaseNumber.bind(this);
        this.decreaseNumber = this.decreaseNumber.bind(this);
    }
    toggleGroup() {
        this.setState({
            displayGroup: !this.state.displayGroup
        });
    }
    toGroup() {
        if(this.state.displayGroup===false){
            this.setState({
                displayGroup: !this.state.displayGroup
            });
            var groupSwitch = $("#group-switch input");
            groupSwitch.prop('checked', true);
        }
    }
    toOTO() {
        if(this.state.displayGroup===true){
            this.setState({
                displayGroup: !this.state.displayGroup
            });
            var groupSwitch = $("#group-switch input");
            groupSwitch.prop('checked', false);
        }
    }
    increaseNumber() {
        if(this.state.clientNumber >= 5){
            //Maximum number of clients
        } else {
            this.setState({
                clientNumber: this.state.clientNumber + 1
            });
        }
    }
    decreaseNumber() {
        if(this.state.clientNumber <= 2){
            this.setState({
                displayGroup: !this.state.displayGroup
            })
            var groupSwitch = $("#group-switch input");
            groupSwitch.prop('checked', false);
        } else {
            this.setState({
                clientNumber: this.state.clientNumber - 1
            });
        }
    }
    render() {
        return (
            <div className="client-details-container">
                <div className="buttons-container">
                    <GroupSwitch 
                        toggleGroup = {this.toggleGroup}
                        toGroup = {this.toGroup}
                        toOTO = {this.toOTO}
                        clientNumber = {this.state.clientNumber}
                        increaseNumber={this.increaseNumber}
                        decreaseNumber={this.decreaseNumber}
                        displayGroup={this.state.displayGroup}/>
                </div>
                <div>
                    <BookingDetails />
                </div>
            </div>
        )
    }
}

export default ClientDetails;