import React from 'react';
import { PriceRatingBanner } from './PriceRatingBanner.jsx';
import { DateRangePicker } from './DateRangePicker.jsx';
import { Guests } from './Guests.jsx';

function Booking(props) {
  return (
    <div>
      <div className="bookingOuter">
        <div className="bookingBorder">
          <div className="bookingSpacer">
            <div className="bookingContentArea">
              <PriceRatingBanner />
              <form className="bookingForm">
                <div className="bookingFormStandardFields">
                  <div className="bookingFormFieldsTopMargin">
                    <DateRangePicker
                      currentShow={props.currentShow}
                      showCal={props.showCal}
                      onShowOrHideCalClick={props.onShowOrHideCalClick}
                      buildCalendarRowForSelectedMonth={
                        props.buildCalendarRowForSelectedMonth
                      }
                      determineStructureOfCalendarForSelectedMonth={
                        props.determineStructureOfCalendarForSelectedMonth
                      }
                      onCalendarChangeClick={props.onCalendarChangeClick}
                      calendar={props.calendar}
                      selectDates={props.selectDates}
                    />
                  </div>
                  <div className="bookingFormFieldGuestMargin">
                    <Guests
                      showGuest={props.showGuest}
                      onGuestCountChangeClick={props.onGuestCountChangeClick}
                      onGuestMenuExpandClick={props.onGuestMenuExpandClick}
                      guests={props.guests}
                    />
                  </div>
                </div>
                <div className="bookingSubmitButtonMargin">
                  <button className="bookingSubmitButton" type="submit" onClick={e => e.preventDefault()}>
                    <span className="bookingSubmitButtonSpan">
                      Request to Book
                    </span>
                  </button>
                </div>
                <div className="bookingBottomLabelMargin">
                  <div className="bookingBottomLabelInner">
                    <span className="spanRender bookingBottomLabelInnerSpan">
                      You won’t be charged yet
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {
  Booking
}