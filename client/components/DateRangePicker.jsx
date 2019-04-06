import React from 'react';
import { Calendar } from './Calendar.jsx';
import { CalendarHeader } from './CalenderHeader.jsx';

const SvgArrowTopCal = props => (
  <svg className={props.currentShow === 'Check-in' ? "arrow-top-cal_svg___dpszbt" : 'arrow-top-cal_svg___dpszbt arrow-top-cal_svg___dpszbt-right'} {...props}>
    <path className="arrow-top-cal_svg___whdw9f" d="M0 10h20L10 0z" />
    <path className="arrow-top-cal_svg___c3dsty" d="M0 10L10 0l10 10" />
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
function DateRangePicker(props) {
  return (
    <div>
      <div>
        <label>
          <span>Dates</span>
        </label>
      </div>
      <div className="DRPcheckinCheckout">
        <div className="DRPcheckinCheckoutBorder">
          <div className="DRPcheckinCheckoutTR">
            <div className="DRPcheckinTableCell">
              <div className="DRPcheckinCheckoutPad">
                <input
                  className='DRPInputOutput'
                  id='Check-in'
                  type="text"
                  label="Check-in"
                  placeholder="Check-in"
                  onClick={(e) => props.onShowOrHideCalClick(e)}
                />
                
                <div
                  className={
                    props.showCal
                      ? ''
                      : 'DRPCalHide'}
                >
                  <SvgArrowTopCal currentShow={props.currentShow} />
                    <div
                      className={
                        props.calendar.length === 6
                          ? "calContainer calXL"
                          : "calContainer"
                      }
                  >
                      <div>
                        <CalendarHeader
                          buildCalendarRowForSelectedMonth={
                            props.buildCalendarRowForSelectedMonth
                          }
                          determineStructureOfCalendarForSelectedMonth={
                            props.determineStructureOfCalendarForSelectedMonth
                          }
                          onCalendarChangeClick={props.onCalendarChangeClick}
                          selectDates={props.selectDates}
                        />
                      </div>
                      <div className="calInner">{props.calendar}</div>
                    </div>
                </div>
              </div>
            </div>
            <div className='DRPInputOutputArrow'>
              <SvgArrowCalendar/>
            </div>
            <div className="DRPcheckoutTableCell">
              <div className="DRPcheckinCheckoutPad">
                <input
                  className='DRPInputOutput'
                  id='Checkout'
                  type="text"
                  label="Checkout"
                  placeholder="Checkout"
                  onClick={(e) => props.onShowOrHideCalClick(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export {
    DateRangePicker
}