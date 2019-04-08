import React from 'react';

function CalendarCell(props) {
  const booked = !!props.availabilityModel;
  const determineCalDayClass = (day, booked) => { 
    var classStr = "";
    if (!day) {
      classStr = 'calDay calDayNull';
    } else {
      booked ? classStr = 'calDay calDayBooked' : classStr = 'calDay';
    }
    return classStr;
  }
  return (
    <div className={determineCalDayClass(props.day, booked)} >{props.day}</div>
  )
}

export {
  CalendarCell
}