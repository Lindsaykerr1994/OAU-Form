import React, { Component } from 'react';
import $ from 'jquery';


class TimeInput extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    validateTime(event) {
        var iV = $("#time-input").val();
        var vL = iV.length;
        var newInput, mI, hI;
        if(event.keyCode === 8){
            console.log("backspace");
        } else {
            if(isNaN(iV[vL-1])){
                if(iV[vL-1]===":"){
                    if(vL===2){
                        if(Number(iV[0])<6){
                        $("#time-input").val(`06:`);
                        } else{
                            $("#time-input").val(`0${iV[0]}:`);
                            return;
                        }
                    } else if(vL===3) {
                        return;
                    } else {
                        console.log("Test")
                        newInput = iV.substr(0,vL-1);
                        $("#time-input").val(`${newInput}`);
                    }
                } else {
                    newInput = iV.substr(0,vL-1);
                    $("#time-input").val(newInput);
                }
            } else {
                if(vL===2){
                    if(Number(iV)<6){
                        $("#time-input").val(`06:`);
                    } else if(Number(iV)>18){
                        $("#time-input").val(`18:`);
                    } else {
                        $("#time-input").val(`${iV}:`);
                    }
                }else if(vL===5){
                    hI = iV.substr(0,2);
                    mI = Number(iV.substr(3,2));
                    if(mI===0||mI===15||mI===30||mI===45){
                        return;
                    } else if(mI>=60) {
                        $("#time-input").val(`${hI}:45`);
                    } else {
                        newInput = Math.floor(mI/15);
                        $("#time-input").val(`${hI}:${newInput*15}`);
                    }
                }
            }
        }
    }
    render() {
        return (
            <div id="time-input-container" className="form-input datetime-input inline-block">
                <input 
                    type="text" maxLength="5"
                    id="time-input" name="timeInput"
                    placeholder="Time"
                    onKeyUp={this.validateTime}></input>
            </div>
        )
    }
}

export default TimeInput;