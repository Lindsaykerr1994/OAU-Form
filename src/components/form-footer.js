import React, { Component } from 'react';
import $ from 'jquery';
//import emailjs from 'emailjs-com';

class FormFilter extends Component {
    constructor(){
        super();
        this.state = {
        }
        this.formSend = this.formSend.bind(this);
    }
    validateForm(){
        var activity, activity2, activity3;
        var issues = [];
        activity = $("#activity-select .select-selected").attr("data-value");
        
        if(typeof activity === "undefined"){
            issues.push(1, "An Activity");
            return issues;
        } else {
            if(activity==="Indoor Climbing"||activity==="Outdoor Climbing"){
                activity2 = $("#climbing-select-1 .select-selected").attr("data-value");
                if(typeof activity2 === "undefined"){
                    issues.push(1, "A Climbing Speciality");
                    return issues;
                } else {
                    activity3 = $("#climbing-select-2 .select-selected").attr("data-value");
                    if(typeof activity3 === "undefined"){
                        issues.push(1, "A Course Level");
                        return issues;
                    }
                }
            } else if (activity==="Kayaking"||activity==="Canoeing"){
                activity2 = $("#ck-select-1 .select-selected").attr("data-value");
                if(typeof activity2 === "undefined"){
                    issues.push(1, "A Paddle Sport Preference");
                    return issues;
                } else {
                    activity3 = $("#ck-select-2 .select-selected").attr("data-value");
                    if(typeof activity3 === "undefined"){
                        issues.push(1, "A Course Level");
                        return issues;
                    }
                }
            } else {
                activity2 = $("#hiking-select .select-selected").attr("data-value");
                if(typeof activity2 === "undefined"){
                    issues.push(1, "A Course Level");
                    return issues;
                }
            }
        };
        if($("#time-input").val().length === 0){
            issues.push(2, "Time");
            return issues;
        };
        if($("#date-input").val().length === 0){
            issues.push(2, "Date");
            return issues;
        };
        if($("#location-input").val().length === 0){
            issues.push(2, "Location");
            return issues;
        };
        if($("#name-input").val().length === 0){
            issues.push(3, "Name");
            return issues;
        };
        if($("#address-input").val().length === 0){
            issues.push(3, "Address");
            return issues;
        };
        if($("#postcode-input").val().length < 5||$("#postcode-input").val().length > 7){
            issues.push(3, "Postcode");
            return issues;
        };
        if($("#phone-input").val().length < 10){
            issues.push(3, "Phone Number");
            return issues;
        };
        if($("#email-input").val().length === 0){
            issues.push(3, "Email Address");
            return issues;
        };
    };
    formSend(){
        var errors = this.validateForm();
        var errorMessage;
        console.log(errors);
        if(typeof errors !== "undefined"){
            if(errors[0] === 1){
                errorMessage = `Please Select ${errors[1]}`
            } else {
                errorMessage = `Please Enter A Valid ${errors[1]}`
            }
            $("#error-message").text(errorMessage);
        } else {
            console.log("all g");
            $("#error-message").text(" ");
            // emailjs.send("gmail","onwards-and-upwards-temp", {
            //     "activity": act,
            //     "session_date": date,
            //     "session_time": time,
            //     "session_location": location,
            //     "solo_group": soloGroup,
            //     "number_of_participants": numPart,
            //     "participants_details": partDetails
            // }, 'user_n3752GGwRCOUDT7xKcexo')
            // .then((result) => {
            //     console.log(result.text);
            // }, (error) => {
            //     console.log(error.text);
            // });
        }
    }
    render() {
        return(
            <div className="form-footer">
                <div id="error-message-container">
                    <p className="font-12 text-orange mb-0 ml-31" id="error-message"> </p> 
                </div>
                <div
                    className="submit-button font-oswald font-20 font-500"
                    onClick={this.formSend}>Submit</div>
            </div>
        )
    }
}

export default FormFilter;