import React, { Component } from 'react';

import '../../css/activity-select.css';

class ActivityInput extends Component {
    constructor() {
        super();
        this.state = {
            displayClimbing: false
        }
        
    }
    componentDidMount(){
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
        document.addEventListener("click", closeAllSelect);
    }
    
    render() {
        return (
            <div className="activity-select-container">
                <div id="activity-id"
                    className="form-select inline-block activity-select"
                    onClick={this.toggleSelect}>
                        <div className="select-selected font-futura-light" data-value="">Activity</div>
                        <div className="select-items font-futura-light hide-select">
                            <div data-value="Indoor Climbing">Indoor Climbing</div>
                            <div data-value="Outdoor Climbing">Outdoor Climbing</div>
                            <div data-value="Kayaking">Kayaking</div>
                            <div data-value="Canoeing">Canoeing</div>
                            <div data-value="Hiking">Hiking</div>
                        </div>
                </div>
                <div id="activity-id-2"
                    className={"form-select inline-block activity-select " + (this.displayClimbing ? "" : "activity-hide")}
                    onClick={this.toggleSelect}>
                        <div className="select-selected font-futura-light" data-value="Canoeing">Level</div>
                        <div className="select-items hide-select font-futura-light">
                            <div data-value="Introduction">Introduction</div>
                            <div data-value="Beginner's">Beginner's</div><div data-value="Improver's">Improver's</div>
                            <div data-value="Half-Day">Half-Day</div><div data-value="Full Day">Full Day</div>
                            <div data-value="MultiDay">MultiDay</div>
                            <div data-value="Overseas Expedition">Overseas Expedition</div>
                            <div data-value="Navigational Skills Training">Navigational Skills Training</div>
                            <div data-value="Charity Walk Support">Charity Walk Support</div>
                        </div>
                </div>
                <div id="activity-id-3"
                    className={"form-select inline-block activity-select w-50 " + (this.displayClimbing ? "activity-hide" : "")}
                    onClick={this.toggleSelect}>
                        <div className="select-selected font-futura-light">Level</div>
                        <div className="select-items hide-select font-futura-light">
                            <div data-value="Bouldering">Bouldering</div><div data-value="Top-Roping">Top-Roping</div>
                        </div>
                </div>
                <div id="activity-id-4"
                    className={"form-select inline-block activity-select w-50 " + (this.displayClimbing ? "activity-hide" : "")}
                    onClick={this.toggleSelect}>
                        <div className="select-selected font-futura-light">Level</div>
                        <div className="select-items hide-select font-futura-light">
                            <div data-value="Introduction">Introduction</div>
                            <div data-value="Beginner's">Beginner's</div>
                            <div data-value="Improver's">Improver's</div>
                        </div>
                </div>
            </div>
        )
    }
}

export default ActivityInput;