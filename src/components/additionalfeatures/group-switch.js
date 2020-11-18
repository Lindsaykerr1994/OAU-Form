import React, { Component } from 'react';

import '../../css/group-switch.css';

class GroupSwitch extends Component {
    render(){
        return(
            <div 
                id="group-switch"
                className="inline-block">
                <div>
                    <p className="inline-block font-15 font-futura">Solo</p>
                    <label className="switch">
                        <input 
                            id="group-checkbox"
                            type="checkbox"
                            onClick={this.props.toggleGroup}
                        ></input>
                        <span className="slider round"></span>
                    </label>
                    <p className="inline-block font-15 font-futura">Group</p>
                </div>
            </div>
        )
    }
}
export default GroupSwitch;