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
        var i, time, date, location, name, DOB, address, postcode, phone, email, emer_name, emer_number
        var issues = [];
        time = $("#time-input").val();
        date = $("#date-input").val();
        location = $("#location-input").val();
        if(time.length === 0){
            issues.push([1, "Time"]);
            return issues;
        };
        if(date.length === 0){
            issues.push([1, "Date"]);
            return issues;
        };
        if(location.length === 0){
            issues.push([1, "Location"]);
            return issues;
        };
        if($("#group-checkbox").is(':checked')){
            name = $("#booking-name").val();
            address = $("#booking-address").val();
            postcode = $("#booking-postcode").val();
            phone = $("#booking-phone").val();
            email = $("#booking-email").val();
            emer_name = $("#group-emergency-name").val();
            emer_number = $("#group-emergency-number").val();
            if(name.length === 0){
                issues.push([21, "Name"]);
                return issues;
            }
            if(address.length === 0){
                issues.push([21, "Address"]);
                return issues;
            }
            if(postcode.length === 0){
                issues.push([21, "Post Code"]);
                return issues;
            }
            if(phone.length < 10){
                issues.push([21, "Phone Number"]);
                return issues;
            }
            if(this.EmailCheck(email)===false){
                issues.push([21, "Email Address"]);
                return issues;
            }
            if(emer_name.length === 0 || emer_number.length < 10){
                issues.push([22, "Emergency Contact Details"]);
                return issues; 
            }
            var num_parts = $(".group-participant-form").length;
            for(i=0;i<num_parts;i++){
                name = $(`#group-part-${i} input[name='name-input']`).val();
                DOB =  $(`#group-part-${i} input[name='DOB-input']`)[0];
                var dec = $(`#group-part-${i} input[name='injury-conditions']`).val();
                if(name.length === 0){
                    issues.push([`23${i}`, "Participant's Name"]);
                    return issues;
                }
                if(this.DOBCheck(DOB)[0]===false){
                    issues.push([`23${i}`, "Participant's Date Of Birth"]);
                    return issues;
                }
                if(dec.length === 0){
                    issues.push([`23${i}`, "Participant's Declaration"]);
                    return issues;;
                }
            }
        } else {
            name = $("#solo-name").val();
            DOB = $("#client-solo .DOB-input")[0];
            address = $("#solo-address").val();
            phone = $("#solo-phone").val();
            email = $("#solo-email").val();
            emer_name = $("#solo-emergency-name").val();
            emer_number = $("#solo-emergency-number").val();
            if(name.length === 0){
                issues.push([`31`, "Participant Name"]);
                return issues;
            }
            if(this.DOBCheck(DOB)===false){
                issues.push([`31`, "Date Of Birth"]);
                return issues;
            }
            if(address.length === 0){
                issues.push([`31`, "Address"]);
                return issues;
            }
            if(phone.length < 10){
                issues.push([`31`, "Phone Number"]);
                return issues;
            }
            if(this.EmailCheck(email)===false){
                issues.push([`31`, "Email Address"]);
                return issues;
            }
            if(emer_name.length === 0 || emer_number.length < 10){
                issues.push([`32`, "Emergency Contact Details"]);
                return issues; 
            }
            if(!$("#solo-no-dec").is(':checked')){
                var solo_dec_inj = $("#solo-injury-details").val();
                var solo_dec_med = $("#solo-medicine-details").val();
                if(solo_dec_inj.length === 0||solo_dec_med.length === 0){
                    issues.push([`33`, "Declaration of Relevant Medicial Conditions"]);
                    return issues;
                }
            }
        }
        return issues;
    }
    DOBCheck(input){
        var DOBcode = input.getAttribute("data-valid");
        console.log(DOBcode);
        if(DOBcode === 0){
            return true;
        } else{
            return (false, DOBcode);
        };
    };
    EmailCheck(input){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(input.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    };
    formSend(){
        var errors = this.validateForm();
        var errorMessage;
        console.log(errors)
        if(errors.length > 0){
            var errorCode = (errors[0][0]);
            var errorInput = errors[0][1];
            if(errorCode===1){
                errorMessage = `There is an error in the Sessions Details. Please enter a valid ${errorInput}`;
            } else if (errorCode[0]==="2"){
                if(errorCode===21){
                    errorMessage = `There is an error in the Booking Details. Please enter a valid ${errorInput}`;
                } else if (errorCode===22){
                    errorMessage = `There is an error in the Emergency Details. Please enter a valid ${errorInput}`;
                } else {
                    console.log(errorCode[2]);
                    errorMessage = `There is an error in Partipant ${parseInt(errorCode[2])+1}'s details. Please enter a valid ${errorInput}`;
                }
            } else if (errorCode[0]==="3"){
                if(errorCode[1]==="1"){
                    errorMessage = `There is an error in the Personal Details. Please enter a valid ${errorInput}`;
                } else if (errorCode[1]==="2"){
                    errorMessage = `There is an error in ${errorInput}. Please double check these details.`;
                } else {
                    errorMessage = `Please enter your Declaration of Medical Conditions or select the certification.`;
                }
            }
            $("#error-message").text(errorMessage);
        } else {
            $("#error-message").text(" ");
            var i, session_time, session_date, session_location, solo_group, booking_details, emergency_details, number_parts, declaration_details
            var parts_details = [];
            session_time = $("#time-input").val();
            session_date = $("#date-input").val();
            session_location = $("#location-input").val();
            if($("#group-checkbox").is(':checked')){
                solo_group = "Group";
                booking_details = [
                    $("#booking-name").val(),
                    $("#booking-address").val(),
                    $("#booking-postcode").val(),
                    $("#booking-email").val(),
                    $("#booking-phone").val()
                ];
                emergency_details = [
                    $("#group-emergency-name").val(),
                    $("#group-emergency-number").val()
                ];
                number_parts = $(".group-participant-form").length;
                for(i=0;i<number_parts;i++){
                    var name = $(`#group-part-${i} input[name='name-input']`).val();
                    var dob = $(`#group-part-${i} input[name='DOB-input']`).val();
                    var declaration = $(`#group-part-${i} input[name='injury-conditions']`).val()
                    var details = "Participant "+(i+1)+": "+name+" "+dob+" "+declaration;
                    parts_details.push(details);
                };
            } else {
                solo_group = "Solo";
                number_parts = 1;
                booking_details = [
                    $("#client-solo #solo-name").val(),
                    $("#client-solo .DOB-input").val(),
                    $("#client-solo #solo-address").val(),
                    $("#client-solo #solo-postcode").val(),
                    $("#client-solo #solo-email").val(),
                    $("#client-solo #solo-phone").val()
                ];
                emergency_details = [
                    $("#solo-emergency-name").val(),
                    $("#solo-emergency-number").val()
                ];
                declaration_details = [
                    $("#solo-injury-details").val(),
                    $("#solo-medicine-details").val()
                ];
            };
            console.log(session_time, session_date, session_location, solo_group, booking_details, emergency_details, number_parts, parts_details, declaration_details);
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