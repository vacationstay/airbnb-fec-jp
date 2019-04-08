import React from 'react';
import moment from 'moment';
import { SvgArrowLeft } from './SvgComponents.jsx';
import { SvgArrowRight } from './SvgComponents.jsx';

function CalendarHeader(props) {
  const daysOfWeek = moment.weekdaysMin();
  const renderDOW = daysOfWeek.map((day, i) => (
    <li key={i} className="calHeadMonthYear">
      {day}
    </li>
  ));
    
  return (
    <div>
      <div className="calHeadDays">
        <ul>{renderDOW}</ul>
      </div>
      <div className="calHeadWide">
        <div className="calHead">
          <div
            className="calHeadBtn calHeadLeft"
            onClick={() => props.onCalendarChangeClick(false)}
          >
            <SvgArrowLeft className="svg" />
          </div>
          <div className="calHeadBanner">
            <strong>
              {props.selectDates[0]} {props.selectDates[1]}
            </strong>
          </div>
          <div
            className="calHeadBtn calHeadRight"
            onClick={() => props.onCalendarChangeClick(true)}
          >
            <SvgArrowRight className="svg" />
          </div>
        </div>
      </div>
    </div>
  );
}


export {
  CalendarHeader
}