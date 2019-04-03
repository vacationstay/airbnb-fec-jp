import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarCell } from './CalendarCell.jsx';
import './styles.css';

function CalendarRow(props) {
  return (
    <div className='calRow'>
      <CalendarCell day={props.days[0]} /> <CalendarCell day={props.days[1]} /> <CalendarCell day={props.days[2]} /> <CalendarCell day={props.days[3]} />
      <CalendarCell day={props.days[4]} /> <CalendarCell day={props.days[5]} /> <CalendarCell day={props.days[6]} />
    </div>
  )
}

export {
  CalendarRow
}