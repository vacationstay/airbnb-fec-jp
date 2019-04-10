import React from 'react';
import { ACCalendarHeader } from './ACCalendarHeader.jsx';


function AvailabilityContainer(props) {
  return (
    <div className='ACContainer'>
      <div className='ACTopMargin'>
        <h2>
          <div className='AVTopDiv'>Availability</div>
        </h2>
      </div>
      <div className='ACContent'>
        <div className='ACContentInfoBanner'>
          <div >1 night minimum stay · Updated 1 day ago</div>
        </div>
        <div className='ACDoubleCalContainer'>
          <div>
            <ACCalendarHeader
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
          <div className='ACCDoubleCalendarArea'>
            <div className='ACCalInnerLeft'>
            {props.calendar}
            </div>
            <div className='ACCalInnerRight'>
            {props.calendar}
            </div>
          </div>
        </div>
      </div>
      <div className='ACBottomMargin'>
        <div className='ACBottomDivider'></div>
      </div>
      <div></div>
    </div>
  )
}
export {
  AvailabilityContainer
}
