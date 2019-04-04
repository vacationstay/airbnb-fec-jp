import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { PriceRatingBanner } from './PriceRatingBanner.jsx';
import { DateRangePicker } from './DateRangePicker.jsx';
import { Calendar } from './Calendar.jsx';

function Booking (props) {
  return (
    <div>
      <div className='bookingOuter'>
        <div className='bookingBorder'>
          <div className='bookingSpacer'>
            <div className='bookingContentArea'>
              <PriceRatingBanner />
              <form className='bookingForm'>
                <div className='bookingFormStandardFields'>
                  <div className='bookingFormFieldsTopMargin'>
                    <DateRangePicker/>
                  </div>
                </div>
              </form>
            </div> 
          </div>
        </div>
        {/* WILL NEED TO REPOSITION THIS */}

      </div>
      <div>
        <Calendar buildCalendarRowForSelectedMonth={props.buildCalendarRowForSelectedMonth} determineStructureOfCalendarForSelectedMonth={props.determineStructureOfCalendarForSelectedMonth} onCalendarChangeClick={props.onCalendarChangeClick} calendar={props.calendar} selectDates={props.selectDates} />
      </div>
    </div>
  )
}

export {
  Booking
}
