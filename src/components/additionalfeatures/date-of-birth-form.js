import React, { Component } from 'react';

class DateOfBirthInput extends Component {
    testFun(event){
        var iE = event.target;
        var iV = iE.value;
        var vL = iV.length;
        var newInput;
        if(event.keyCode === 8){
            if(vL===3||vL===6){
                newInput = iV.substr(0,vL-1);
                console.log(newInput);
                iE.value = newInput;
            }
        }
    }
    newValidateDOB(event){
        var iE = event.target;
        var iV = iE.value;
        var vL = iV.length;
        var newInput, mI, hI;
        if(event.keyCode === 8){
            console.log("backspace");
        } else {
            if(isNaN(iV[vL-1])){
                if(iV[vL-1]==="/"){
                    if(vL===2){
                        if(Number(iV[0])<10){
                            if(Number(iV[0])===0){
                                iE.value = `01/`;
                            } else {
                                console.log("test")
                                iE.value = `0${iV[0]}/`;
                            }
                        } else{
                            console.log("hello");
                            return;
                        }
                    } else if(vL===3) {
                        return;
                    } else if(vL===5){
                        newInput = iV.substr(0,vL-1);
                        iE.value = `${newInput}/`;
                    } else {
                        newInput = iV.substr(0,vL-1);
                        iE.value = `${newInput}`;
                    }
                } else {
                    newInput = iV.substr(0,vL-1);
                    iE.value = newInput;
                }
            } else {
                if(vL===2){
                    if(Number(iV)>31){
                        iE.value = `31/`;
                    } else {
                        iE.value = `${iV}/`;
                    }
                } else if(vL===5){
                    hI = iV.substr(0,2);
                    mI = Number(iV.substr(3,2));
                    if(mI<12){
                        iE.value = `${iV}/`;
                    } else {
                        iE.value = `${hI}/12/`;
                    }
                }
            }
        }
    }
    formatDOB(event){
        var iE = event.target;
        var iV = iE.value;
        var vL = iV.length;
        var mI, hI, yI;
        if(vL === 8){
            hI = Number(iV.substr(0,2));
            mI = Number(iV.substr(3,2));
            yI = Number(iV.substr(6,2));
            if(hI > 28&&mI === 2){
                if(hI === 29 && yI%4 === 0){
                    iE.setAttribute("data-valid","0");
                } else {
                    iE.setAttribute("data-valid","1");
                };
            } else if (hI > 30){
                if (mI === 4||mI === 6||mI === 9||mI === 11){
                    iE.setAttribute("data-valid","1");
                } else {
                    iE.setAttribute("data-valid","0");
                };
            } else {
                iE.setAttribute("data-valid","0");
            };
            hI = iV.substr(0,5);
            if(yI < 15){
                if(yI < 10){
                    iE.value = `${hI}/200${yI}`;
                } else {
                    iE.value = `${hI}/20${yI}`;
                }
                iE.setAttribute("data-valid","0");
            } else if(yI > 20){
                iE.value = `${hI}/19${yI}`;
                iE.setAttribute("data-valid","0");
            } else {
                iE.value = `${hI}/20${yI}`;
                iE.setAttribute("data-valid","3");
            }
        } else if (vL === 10){
            hI = Number(iV.substr(0,2));
            mI = Number(iV.substr(3,2));
            yI = Number(iV.substr(6,4));
            if(hI > 28&&mI === 2){
                if(hI === 29 && yI%4 === 0){
                    iE.setAttribute("data-valid","0");
                } else {
                    iE.setAttribute("data-valid","1");
                };
            } else if (hI > 30){
                if (mI === 4||mI === 6||mI === 9||mI === 11){
                    iE.setAttribute("data-valid","1");
                } else {
                    iE.setAttribute("data-valid","0");
                };
            } else {
                iE.setAttribute("data-valid","0");
            };
        } else {
            iE.setAttribute("data-valid","1");
        }
    }
    render() {
        return (
            <div 
                className="form-input text-input w-25 inline-block">
                <input 
                    type="text" name="DOB-input"
                    placeholder="D.O.B"
                    maxLength="10"
                    className="DOB-input"
                    data-valid="1"
                    onChange={this.newValidateDOB}
                    onKeyUp={this.testFun}
                    onBlur={this.formatDOB}
                    >
                </input>
            </div>
        )
    }
}

export default DateOfBirthInput;