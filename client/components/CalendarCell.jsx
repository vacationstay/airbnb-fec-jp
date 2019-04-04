import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function CalendarCell(props) {
  const booked = !!props.availabilityModel;
  

  return (
    <div className={booked ? 'calDayBooked calDay' : 'calDay'} >{props.day}</div>
  )
}

export {
  CalendarCell
}
