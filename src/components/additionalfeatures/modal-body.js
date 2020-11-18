import React, { Component } from 'react';
import $ from 'jquery';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

class DatePickerModal extends Component {
    constructor() {
        super();
        this.state = {
            todaysDate: [],
            viewMonthYear: []
        }
        this.setDays = this.setDays.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
    }
    componentDidMount(){
        const fullDate = new Date();
        var year = fullDate.getFullYear();
        var month = fullDate.getMonth() + 1;
        var date = fullDate.getDate();
        this.setState ({
            todaysDate: [year, month, date],
            viewMonthYear: [year, month, this.getMonthName(month)]
        });
        var totalDays = this.findTotalDays(month, year);
        this.setDays(year, month, totalDays);
    }
    componentDidUpdate(){
        var totalDays = this.findTotalDays(this.state.viewMonthYear[1], this.state.viewMonthYear[0]);
        this.setDays(this.state.viewMonthYear[0],this.state.viewMonthYear[1], totalDays, this.props.dateSelected);
        this.disablePrevButton();
    }
    findTotalDays(month, year){
        var totalDays;
        if (month===2){
            if(year%4 === 0 && year%100 !== 0){
                totalDays = 29;
            } else {
                if(year%400 === 0){
                    totalDays = 29;
                } else { 
                    totalDays = 28;
                }
            }
        } else if(month===4||month===6||month===9||month===11){
            totalDays = 30;
        } else {
            totalDays = 31;
        }
        return totalDays;
    }
    getMonthName(month){
        var names = ["January", "February", "March", "April", "May",
                         "June", "July", "August", "September", "October",
                         "November", "December"]
        var monthName = names[month-1];
        return monthName;
    }
    setDays(year, month, totalDays, dateSelected) {
        var i = 1, j, k, cell, cellObj, remainingCells, allCells;
        var d = new Date(year,month-1,1);
        var firstDay = d.getDay();
        $(".calendar-row .cell-occupied").removeClass("cell-occupied cell-disabled");
        $(".calendar-row .todays-date").removeClass("todays-date");
        $(".calendar-row .date-selected").removeClass("date-selected");
        $(".calendar-row .is-empty").removeClass("is-empty");
        while(i<=totalDays){
            for(j=0;j<6;j++){
                if(j===0){
                    cell = firstDay;
                } else {
                    cell=0;
                };
                for(cell;cell<7;cell++){
                    cellObj=$(`.calendar-row:eq(${j}) td:eq(${cell}) button:eq(0)`);
                    cellObj.text(i);
                    cellObj.addClass("cell-occupied");
                    cellObj.attr("data-date",i);
                    cellObj.attr("data-month",this.state.viewMonthYear[1]);
                    cellObj.attr("data-year",this.state.viewMonthYear[0]);
                    i++;
                    if(i>totalDays){
                        remainingCells=$(`.calendar-row td button:not(.cell-occupied)`);
                        remainingCells.addClass("is-empty");
                        $(".calendar-row .is-empty").text("");
                        $(".calendar-row .is-empty").attr("data-date","");
                        $(".calendar-row .is-empty").attr("data-month","");
                        $(".calendar-row .is-empty").attr("data-year","");
                        if(this.state.viewMonthYear[0]===this.state.todaysDate[0]&&this.state.viewMonthYear[1]===this.state.todaysDate[1]){
                            allCells = $('.calendar-row .cell-occupied');
                            for(k=0;k<allCells.length;k++){
                                if(allCells[k].textContent<this.state.todaysDate[2]){
                                    allCells[k].className += " cell-disabled";
                                } else if(allCells[k].textContent===this.state.todaysDate[2]){
                                    
                                };
                            }
                        }
                        if(dateSelected!=null){
                            if(dateSelected.length>0){
                                $(`.calendar-row td button[data-year='${dateSelected[0]}'][data-month='${dateSelected[1]}'][data-date='${dateSelected[2]}']`).addClass("date-selected");
                                
                            }
                        }
                        var todaysCell = $(`.calendar-row td button[data-year='${this.state.todaysDate[0]}'][data-month='${this.state.todaysDate[1]}'][data-date='${this.state.todaysDate[2]}']`);
                        if(todaysCell.length>0){
                            todaysCell.addClass("todays-date");
                        };
                        return;
                    }
                }
            }
        };
    }
    nextMonth(){
        var currentMonth = this.state.viewMonthYear[1];
        var year = this.state.viewMonthYear[0];
        var nextMonth = currentMonth + 1;
        if(nextMonth===13){
            year = year + 1;
            nextMonth = nextMonth - 12;
        }
        var nextMonthName = this.getMonthName(nextMonth);
        this.setState({
            viewMonthYear: [year, nextMonth, nextMonthName] 
        });
    }
    prevMonth(){
        var currentMonth = this.state.viewMonthYear[1];
        var year = this.state.viewMonthYear[0];
        var prevMonth = currentMonth - 1;
        if($("#prev-month-button").hasClass("disabled-button")){
            return;
        } else {
            if(prevMonth===0){
                year = year - 1;
                prevMonth = prevMonth + 12;
            }
            var prevMonthName = this.getMonthName(prevMonth);
            this.setState({
                viewMonthYear: [year, prevMonth, prevMonthName] 
            });
        };
    }
    disablePrevButton(){
        if(this.state.viewMonthYear[0]===this.state.todaysDate[0]&&this.state.viewMonthYear[1]===this.state.todaysDate[1]){
            $("#prev-month-button").addClass("disabled-button");
        } else {
            $("#prev-month-button").removeClass("disabled-button");
        }
    }
    render() {
        return (
            <div 
                className={"modal-window " + (this.props.displayModal ? "display-modal": "hide-modal")}
                onClick={this.props.hideModal}>
                    <div className="modal-body font-futura">
                        <div className="modal-button-container">
                            <div
                                id="prev-month-button"
                                className="" 
                                onClick={(this.prevMonth)}>
                                <FaAngleLeft className="font-55"/>
                            </div>
                        </div>
                        <div className="modal-content-container">
                            <div className="modal-title text-center">{this.state.viewMonthYear[2]} {this.state.viewMonthYear[0]}</div>
                            <div className="modal-content">
                                <table className="calendar-table">
                                    <thead className="text-light-grey">
                                        <tr>
                                            <th scope="col">S</th>
                                            <th scope="col">M</th>
                                            <th scope="col">T</th>
                                            <th scope="col">W</th>
                                            <th scope="col">T</th>
                                            <th scope="col">F</th>
                                            <th scope="col">S</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center font-15">
                                        <tr className="calendar-row">
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                        </tr>
                                        <tr className="calendar-row">
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                        </tr>
                                        <tr className="calendar-row">
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                        </tr>
                                        <tr className="calendar-row">
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                        </tr>
                                        <tr className="calendar-row">
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}  className="datepicker-button"></button></td>
                                        </tr>
                                        <tr className="calendar-row">
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}className="datepicker-button"></button></td>
                                            <td><button onClick={this.props.selectDate}  className="datepicker-button"></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <div className="modal-button inline-block">
                                    <p 
                                        className="font-oswald font-20 font-500"
                                        id="close-modal-button"
                                        onClick={this.props.cancelDate}>Cancel</p>
                                </div>
                                <div className="modal-button inline-block">
                                    <p   
                                        className="font-oswald font-20 font-500"
                                        onClick={this.props.confirmDate}>Confirm</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-button-container">
                            <div 
                                className=""
                                onClick={this.nextMonth}>
                                <FaAngleRight className="font-55"/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default DatePickerModal;