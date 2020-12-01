import React, { Component } from 'react';
import $ from 'jquery';

import '../../css/activity-select.css';

class ActivityInput extends Component {
    constructor() {
        super();
        this.state = {
            displayClimbing: false
        }
    }
    componentDidMount() {
        var x, i, j, l, ll, selElmnt, a, b, c;
        x = document.getElementsByClassName("activity-select");
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected font-futura-light");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide font-futura-light");
            for (j = 1; j < ll; j++) {
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.setAttribute("data-value",selElmnt.options[j].innerHTML);
                c.addEventListener("click", function(e) {
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML === this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            h.setAttribute("data-value",this.innerHTML);
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function(e) {
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
            var x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt === y[i]) {
                arrNo.push(i)
                } else {
                y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
                }
            }
        }
        $("#activity-select .select-items div").click(function(e){
            var div = e.target;
            var value = div.getAttribute("data-value");
            if(value==="Indoor Climbing"||value==="Outdoor Climbing"){
                $("#ck-select-1").addClass("activity-hide");
                $("#ck-select-2").addClass("activity-hide");
                $("#hiking-select").addClass("activity-hide");
                $("#climbing-select-1").removeClass("activity-hide");
                $("#climbing-select-2").removeClass("activity-hide");
            } else if(value==="Kayaking"||value==="Canoeing"){
                $("#ck-select-1").removeClass("activity-hide");
                $("#ck-select-2").removeClass("activity-hide");
                $("#hiking-select").addClass("activity-hide");
                $("#climbing-select-1").addClass("activity-hide");
                $("#climbing-select-2").addClass("activity-hide");
            } else {
                $("#ck-select-1").addClass("activity-hide");
                $("#ck-select-2").addClass("activity-hide");
                $("#hiking-select").removeClass("activity-hide");
                $("#climbing-select-1").addClass("activity-hide");
                $("#climbing-select-2").addClass("activity-hide");
            }
        })
        document.addEventListener("click", closeAllSelect);
    }
    render() {
        return (
            <div className="activity-select-container">
                <div 
                    id="activity-select"
                    className="form-select inline-block activity-select">
                    <select>
                        <option value="">Activity</option>
                        <option value="indoor-climbing">Indoor Climbing</option>
                        <option value="outdoor-climbing">Outdoor Climbing</option>
                        <option value="outdoor-climbing">Kayaking</option>
                        <option value="outdoor-climbing">Canoeing</option>
                        <option value="outdoor-climbing">Hiking</option>
                    </select>
                </div>
                <div 
                    id="ck-select-1"
                    className="form-select inline-block activity-select activity-hide w-50 ml-31">
                    <select>
                        <option value="">Solo/Tandem</option>
                        <option value="solo">Solo</option>
                        <option value="tandem">Tandem</option>
                        <option value="either">Either</option>
                    </select>
                </div>
                <div 
                    id="ck-select-2"
                    className="form-select inline-block activity-select activity-hide w-50 ml-10">
                    <select>
                        <option value="">Level</option>
                        <option value="intro">Introduction</option>
                        <option value="beginners">Beginner's</option>
                        <option value="improvers">Improver's</option>
                        <option value="halfday">Half-Day</option>
                        <option value="fullday">Full Day</option>
                        <option value="multiday">MultiDay</option>
                    </select>
                </div>
                <div 
                    id="hiking-select"
                    className="form-select inline-block activity-select activity-hide">
                    <select>
                        <option value="">Level</option>
                        <option value="halfday">Half-Day</option>
                        <option value="fullday">Full Day</option>
                        <option value="multiday">MultiDay</option>
                        <option value="overseas">Overseas Expedition</option>
                        <option value="improvers">Navigational Skills Training</option>
                        <option value="improvers">Charity Walk Support</option>
                    </select>
                </div>
                <div 
                    id="climbing-select-1"
                    className="form-select inline-block activity-select w-50 ml-31 activity-hide">
                    <select>
                        <option value="">Boulder/ Top-Roping</option>
                        <option value="intro">Bouldering</option>
                        <option value="beginners">Top-Roping</option>
                        <option value="either">Either</option>
                    </select>
                </div>
                <div 
                    id="climbing-select-2"
                    className="form-select inline-block activity-select w-50 ml-10 activity-hide">
                    <select>
                        <option value="">Level</option>
                        <option value="intro">Introduction</option>
                        <option value="beginners">Beginner's</option>
                        <option value="improvers">Improver's</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default ActivityInput;