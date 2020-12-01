import React, { Component } from 'react';

import Header from './components/header.js';
import DateTimeForm from './components/datetimeform.js';
import ClientDetails from './components/clientdetails.js';
import AdditionalComments from './components/additionalcomments.js';
import FormFooter from './components/form-footer.js';

import './css/App.css';
import './css/fonts.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <DateTimeForm />
                <ClientDetails />
                <AdditionalComments />
                <FormFooter />
            </div>
        )
    }
}

export default App;
