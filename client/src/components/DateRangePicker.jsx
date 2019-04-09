    
import React from 'react';
import { CalendarHeader } from './CalenderHeader.jsx';
import { SvgArrowTopCal } from './SvgComponents.jsx';
import { SvgArrowCalendar } from './SvgComponents.jsx';

function DateRangePicker(props) {
  return (
    <div>
      <div>
        <label className='labelRender'>
          <span className='spanRender'>Dates</span>
        </label>
      </div>
      <div className="DRPcheckinCheckout">
        <div className="DRPcheckinCheckoutBorder">
          <div className="DRPcheckinCheckoutTR">
            <div className="DRPcheckinTableCell">
              <div className="DRPcheckinCheckoutPad">
                <input
                  className='inputRender DRPInputOutput'
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
                  className='inputRender DRPInputOutput'
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