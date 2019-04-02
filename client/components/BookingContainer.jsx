import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './styles.css';
import { DateRangePicker } from './DateRangePicker.jsx';

class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='BCstyle'>
        <DateRangePicker />
      </div>
    )
  }

}

export {
  BookingContainer
}