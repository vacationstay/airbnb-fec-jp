import React from 'react';
import { CalendarCell } from './CalendarCell.jsx';

function CalendarRow(props) {
  return (
    <div className='calRow'>
      <CalendarCell availabilityModel={props.availabilityModel[props.days[0] - 1]} day={props.days[0]} /> <CalendarCell availabilityModel={props.availabilityModel[props.days[1] - 1]} day={props.days[1]} /> <CalendarCell availabilityModel={props.availabilityModel[props.days[2] - 1]} day={props.days[2]} /> <CalendarCell availabilityModel={props.availabilityModel[props.days[3] - 1]} day={props.days[3]} />
      <CalendarCell availabilityModel={props.availabilityModel[props.days[4] - 1]} day={props.days[4]} /> <CalendarCell availabilityModel={props.availabilityModel[props.days[5] - 1]} day={props.days[5]} /> <CalendarCell availabilityModel={props.availabilityModel[props.days[6] - 1]} day={props.days[6]} />
    </div>
  )
}

export {
  CalendarRow
}
