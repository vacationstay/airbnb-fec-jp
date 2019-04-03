import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function CalendarCell (props) {
  return (
    <div className='calDay'>{props.day}</div>
  )
}

export {
  CalendarCell
}
