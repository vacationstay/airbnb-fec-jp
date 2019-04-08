import React from 'react';
import moment from 'moment';
import { SvgArrowLeft } from './SvgComponents.jsx';
import { SvgArrowRight } from './SvgComponents.jsx';

function ACCalendarHeader(props) {
  const daysOfWeek = moment.weekdaysMin();
  const renderDOW = daysOfWeek.map((day, i) => (
    <li key={i} className="calHeadMonthYear">
      {day}
    </li>
  ));
  return (
    <div>
      <div>
        <div className="calHeadDays">
          <ul>{renderDOW}</ul>
        </div>
        <div className="calHeadWide">
          <div className="calHead">
            <div
              className="calHeadBtn ACCalHeadBtnLeft"
              onClick={() => props.onCalendarChangeClick(false)}
            >
              <SvgArrowLeft className="svg" />
            </div>
            <div className="calHeadBanner">
              <strong>
                {props.selectDates[0]} {props.selectDates[1]}
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="ACCalHeadDaysRight">
          <ul>{renderDOW}</ul>
        </div>
        <div className="ACCalHeadWideRight">
          <div className="ACCalHeadRight">
            <div className="ACCalHeadBanner">
              <strong>
                {props.selectDates[0]} {props.selectDates[1]}
              </strong>
            </div>
            <div
              className="calHeadBtn ACCalHeadBtnRight"
              onClick={() => props.onCalendarChangeClick(true)}
            >
              <SvgArrowRight className="svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export {
  ACCalendarHeader
}