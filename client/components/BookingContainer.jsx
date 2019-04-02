import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './styles.css';
import Calendar from './BookingsApp.jsx';

class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <DateRangePicker/>
  }

}


class DateRangePicker extends React.Component {
  render() {
    return (
      <Calendar/>
    )
  } 
}

export {
  DateRangePicker,
  BookingContainer
}