import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarHeader } from './CalenderHeader.jsx';
import './styles.css';

function Calendar(props) {
    return (
      <div className='calContainer'>
        <div >
          <CalendarHeader selectDates={props.selectDates}/>
        </div>
        <div className='calInner'>
          {props.calendar}
        </div>
      </div>
  )
}

export {
  Calendar
}



 