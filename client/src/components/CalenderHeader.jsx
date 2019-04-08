import React from 'react';
import moment from 'moment';

function CalendarHeader(props) {
  const daysOfWeek = moment.weekdaysMin();
  const renderDOW = daysOfWeek.map(day => <li className='calHeadMonthYear'>{day}</li>);
  
  return (
    <div >
      <div className='calHeadDays'>
        <ul>
          {renderDOW}
        </ul>
      </div>
      <div className='calHeadWide'>
        <div className='calHead'>
          <div className='calHeadBtn calHeadLeft' onClick={() => props.onCalendarChangeClick(false)}><SvgArrowLeft className='svg' /></div>
          <div className='calHeadBanner'>
            <strong>{props.selectDates[0]} {props.selectDates[1]}</strong>
          </div>
          <div className='calHeadBtn calHeadRight' onClick={() => props.onCalendarChangeClick(true)}><SvgArrowRight className='svg' /></div>
        </div>
      </div>
    </div>
  )
}

/* HELPER PROPS TO RENDER SVG ICONS */
const SvgArrowLeft = props => (
  <svg
    viewBox="0 0 1000 1000"
    style={{
      height: 19,
      width: 19,
    }}
    {...props}>
    <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" />
  </svg>
);
const SvgArrowRight = props => (
  <svg
    viewBox="0 0 1000 1000"
    style={{
      height: 19,
      width: 19,
    }}
    {...props}>
    <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" />
  </svg>
);
const SvgArrowCalendar = props => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    style={{
      height: 24,
      width: 24
    }}
    display="block"
    fill="currentcolor"
    {...props}
  >
    <path
      d="M0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0-.14-.35v-.01l-7-7a.5.5 0 0 0-.71.71L22.29 12H.5a.5.5 0 0 0-.5.5z"
      fillRule="evenodd"
    />
  </svg>
);

export {
  CalendarHeader
}