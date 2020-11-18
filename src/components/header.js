import React, { Component } from 'react';

import $ from 'jquery';

import '../css/activity-select.css';

$(document).ready(function() {
    var x, l, i, j, ll, selElmnt, a, b, c, activity;
    x = document.getElementsByClassName("activity-select");
    l = x.length;
    for(i=0;i<l;i++){
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected select-arrow-inactive");
        a.setAttribute("id","activity-select-div");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        activity = a.innerHTML;
        a.setAttribute("data-value",selElmnt.options[selElmnt.selectedIndex].innerHTML);
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide font-15");
        for (j = 0; j < ll; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            if(c.innerHTML === activity){
                c.setAttribute("class", "same-as-selected");
            }
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
                    h.setAttribute("data-value",this.innerHTML)
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
            this.classList.toggle("select-arrow-inactive");
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
        y[i].classList.add("select-arrow-inactive");
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
});
class Header extends Component {
    render() {
        return (
            <div className="font-oswald text-uppercase font-20 header">
                <p className="inline-block">Request A </p> 
                <div 
                    id="activity-select"
                    className="form-select inline-block activity-select">
                    <select>
                        <option value="climbing-bouldering">Bouldering</option>
                        <option value="climbing-toproping">Top-Roping</option>
                        
                    </select>
                </div>
                <div 
                    id="activity-select-2"
                    className="form-select inline-block activity-select">
                    <select>
                        <option value="intro">Introduction</option>
                        <option value="beginners">Beginner's</option>
                        <option value="improvers">Improver's</option>
                    </select>
                </div>
                <p className="inline-block"> Course</p> 
            </div>
        )
    }
}

export default Header;