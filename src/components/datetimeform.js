import React, { Component } from 'react';

import ActivityInput from './additionalfeatures/activity-input.js';
import TimeInput from './additionalfeatures/new-time-input.js';
import DateInput from './date-input.js';
import LocationInput from './location-input.js';

import '../css/form-inputs.css';

class DateTimeForm extends Component {
    render() {
        return (
            <div className="date-time-form">
                <ActivityInput />
                <TimeInput />
                <DateInput />
                <LocationInput />
            </div>
        )
    }
}

export default DateTimeForm;