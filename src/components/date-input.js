import React, { Component } from 'react';
import $ from 'jquery';

import '../css/modal-styling.css';

import DatePickerModal from './additionalfeatures/modal-body.js';

class DateInput extends Component {
    constructor() {
        super();
        this.state = {
            displayModal: false,
            todaysDate: [],
            dateSelected: []
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.escHideModal = this.escHideModal.bind(this);
        this.selectDate = this.selectDate.bind(this);
        this.confirmDate = this.confirmDate.bind(this);
        this.cancelDate = this.cancelDate.bind(this);
    }
    componentDidMount(){
        const fullDate = new Date();
        var year = fullDate.getFullYear();
        var month = fullDate.getMonth() + 1;
        var date = fullDate.getDate();
        this.setState ({
            todaysDate: [year, month, date]
        });
    }
    showModal(){
        if($("#date-input").attr('disabled')==="disabled"){
            console.log("disabled");
        } else {
            if(this.state.displayModal===false){
                this.setState({
                    displayModal: !this.state.displayModal
                });
            };
            document.addEventListener("keydown", this.escHideModal);
        }
        
    }
    hideModal(event){
        if(event.target===$(".modal-window")[0]||event.target===$("#close-modal-button")[0]){
            if(this.state.displayModal===true){
                this.setState({
                    displayModal: !this.state.displayModal
                });
            };
        }
    }
    escHideModal(event){
        if(event.keyCode === 27) {
            if(this.state.displayModal===true){
                this.setState({
                    displayModal: !this.state.displayModal
                });
            };
        }
    }
    selectDate(event){
        if($(event.target).hasClass("cell-disabled")||$(event.target).hasClass("cell-disabled")){
            console.log("do nothing");
        } else {
            var selectedCell, date, month, year;
            selectedCell = event.target;
            date = selectedCell.getAttribute("data-date");
            month = selectedCell.getAttribute("data-month");
            year = selectedCell.getAttribute("data-year");
            this.setState({
                    dateSelected: [year, month, date] 
                });
        }
    }
    confirmDate(){
        var yearMonthDate = this.state.dateSelected;
        console.log(yearMonthDate);
        $("#date-input").val(`${yearMonthDate[2]}/${yearMonthDate[1]}/${yearMonthDate[0]}`);
        this.setState({
            displayModal: !this.state.displayModal
        });
    }
    cancelDate() {
        var santaAnna = $("#date-input").val();
        if(santaAnna.length>0){;
            this.setState({
                dateSelected: []
            });
            var resetDate = $("#dateInput").val();
            this.setState({
                dateSelected: [resetDate.substr(6,4),resetDate.substr(3,2),resetDate.substr(0,2)]
            })
        } else {
            console.log("no")
        }
    }
    disableDate() {
        if($("#date-input").attr('disabled')==="disabled"){
            console.log("enable")
            $("#date-input").removeAttr('disabled');
        } else {
            console.log("disable")
            $("#date-input").attr('disabled', 'disabled');
        }
    }
    
    render() {
        return (
            <div className="inline-block">
                <div id="date-input-container" className="form-input datetime-input inline-block" onClick={this.showModal}>
                    <input 
                        type="text" name="date-input" 
                        id="date-input"
                        placeholder="Date"
                        readOnly
                        disabled = ""
                        >
                    </input>
                    <DatePickerModal
                        todaysDate={this.state.todaysDate}
                        displayModal={this.state.displayModal}
                        selectDate={this.selectDate}
                        hideModal={this.hideModal}
                        dateSelected={this.state.dateSelected}
                        confirmDate={this.confirmDate}
                        cancelDate={this.cancelDate}/>
                </div>
                <div 
                    id="any-date-container"
                    className="any-container">
                    <label htmlFor="any-date"
                            className="any-checkbox">
                        <input
                            type="checkbox" className=""
                            id="any-date" name="any-date"
                            onClick={this.disableDate}></input>
                        <span className="any-label"></span>
                    </label>
                    <p className="inline-block font-futura">Any Date</p>
                </div>
            </div>
        )
    }
}

export default DateInput;