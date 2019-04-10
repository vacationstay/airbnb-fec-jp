import React from 'react';
import moment from 'moment';
import { SvgArrowLeft } from './SvgComponents.jsx';
import { SvgArrowRight } from './SvgComponents.jsx';

function ACCalendarHeader(props) {
  const daysOfWeek = moment.weekdaysMin();
  const renderDOW = daysOfWeek.map((day, i) => (
    <li className='liRender' key={i} className="calHeadMonthYear">
      {day}
    </li>
  ));
  return (
    <div>
      <div>
        <div className="calHeadDays">
          <ul className='renderUl'>{renderDOW}</ul>
        </div>
        <div className="calHeadWide">
          <div className="calHead">
            <div
              className="calHeadBtn ACCalHeadBtnLeft"
              onClick={() => props.onCalendarChangeClick(false)}
            >
              <SvgArrowLeft className="svg_" />
            </div>
            <div className="calHeadBanner">
              <strong className='strongRender'>
                {props.selectDates[0]} {props.selectDates[1]}
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="ACCalHeadDaysRight">
          <ul className='renderUl'>{renderDOW}</ul>
        </div>
        <div className="ACCalHeadWideRight">
          <div className="ACCalHeadRight">
            <div className="ACCalHeadBanner">
              <strong className='strongRender'>
                {props.selectDates[0]} {props.selectDates[1]}
              </strong>
            </div>
            <div
              className="calHeadBtn ACCalHeadBtnRight"
              onClick={() => props.onCalendarChangeClick(true)}
            >
              <SvgArrowRight className="svg_" />
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