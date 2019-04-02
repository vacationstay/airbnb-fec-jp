import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './styles.css';
import Calendar from './BookingsApp.jsx';

class DateRangePicker extends React.Component {
    render() {
        return (
            <Calendar />
        )
    }
}

export {
    DateRangePicker
}