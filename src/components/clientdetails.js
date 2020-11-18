import React, { Component } from 'react';
import $ from 'jquery';

import GroupSwitch from './additionalfeatures/group-switch.js';
import SoloForm from './additionalfeatures/solo-form.js';
import GroupForm from './additionalfeatures/group-form.js';

import '../css/buttons.css';

class ClientDetails extends Component {
    constructor() {
        super();
        this.state = {
            displayGroup: false,
            clientNumber: 2
        }
        this.toggleGroup = this.toggleGroup.bind(this);
        this.increaseNumber = this.increaseNumber.bind(this);
        this.decreaseNumber = this.decreaseNumber.bind(this);
    }
    toggleGroup() {
        this.setState({
            displayGroup: !this.state.displayGroup
        });
    }
    increaseNumber() {
        if(this.state.clientNumber >= 6){
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
                        toggleGroup = {this.toggleGroup}/>
                </div>
                <div>
                    <GroupForm 
                        displayGroup={this.state.displayGroup}
                        increaseNumber={this.increaseNumber}
                        decreaseNumber={this.decreaseNumber}
                        clientNumber={this.state.clientNumber}
                    />
                    <SoloForm 
                        displayGroup={this.state.displayGroup}
                    />
                </div>
            </div>
        )
    }
}

export default ClientDetails;