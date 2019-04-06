import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import { CalendarRow } from './CalendarRow.jsx';
import { Booking } from './Booking.jsx';

class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      selectMonthCalendar: [],
      selectDates: [],
      availabilityModel: [],
      showCal: false,
      currentShow: null,
      guests: [1,0,0]
    }
    this.getDateInfoForSelectedYear = this.getDateInfoForSelectedYear.bind(this);
    this.determineStructureOfCalendarForSelectedMonth = this.determineStructureOfCalendarForSelectedMonth.bind(this);
    this.buildCalendarRowForSelectedMonth = this.buildCalendarRowForSelectedMonth.bind(this);
    this.getDummyAvailabilityFigureForRoom = this.getDummyAvailabilityFigureForRoom.bind(this);
    this.modelAvailabilityForSelectedRoom = this.modelAvailabilityForSelectedRoom.bind(this);
    this.onCalendarChangeClick = this.onCalendarChangeClick.bind(this);
    this.onShowOrHideCalClick = this.onShowOrHideCalClick.bind(this);
    this.onGuestCountChangeClick = this.onGuestCountChangeClick.bind(this);
    this.onGuestMenuExpandClick = this.onGuestMenuExpandClick.bind(this);
  }
  componentDidMount() {
    this.getDateInfoForSelectedYear(moment().year());
    this.getDummyAvailabilityFigureForRoom();
  }
  getDummyAvailabilityFigureForRoom() {
    /* 
    This will provide the room id from the window that we need for the initial GET
    Since were not live yet the dummy below will serve the same purpose. 

    const parsedWindowURL = window.location.pathname.split('/');
    const userRoomId = parsedWindow[parsedWindow.length - 1];
    */
    const dummyUserRoomPath = '/rooms/70';

    $.ajax({
      url: `${dummyUserRoomPath}`,
      method: 'GET'
    })
      .done((res) => {
        res = JSON.parse(res);
        console.log(res.availabilityScore);
        this.modelAvailabilityForSelectedRoom(res.availabilityScore);
      });
  }
  onCalendarChangeClick(direction) {
    const monthNames = moment.months();
    var modifier;
    if (direction) {
      modifier = 1;
    } else {
      modifier = -1;
    }
    const indexOfMonthToBeRendered = monthNames.indexOf(this.state.selectDates[0]) + modifier;
    const selectMonth = monthNames[indexOfMonthToBeRendered];

    this.setState({
      selectDates: [selectMonth, this.state.selectDates[1]]
    }, () => {
        this.determineStructureOfCalendarForSelectedMonth(indexOfMonthToBeRendered);
    });
  }
  onShowOrHideCalClick(e) {
    /* open to add logic for clicks outside */
    var showCal = this.state.showCal;
    var currentShow = this.state.currentShow;
    var nextShow;
    if (currentShow) {
      currentShow === 'Check-in' ? nextShow = 'Checkout' : nextShow = 'Check-in';
    }
    const id = e.target.id;

    if (currentShow && (id !== currentShow)) {
      currentShow = nextShow;
    } else {
      currentShow = id;
      showCal = !showCal;
    }
    this.setState({
      showCal: showCal,
      currentShow: currentShow
    })
  }
  onGuestCountChangeClick() {

  }
  onGuestMenuExpandClick() {

  }
  modelAvailabilityForSelectedRoom(availabilityFigure) {
    if (availabilityFigure < 30) {
      availabilityFigure += 30;
    }
    const targetNumberOfNightsBooked = Math.floor(availabilityFigure / 100 * 28);
    const stayDurations = [6, 5, 4, 4, 3, 3, 2];
    const getRandDuration = () => {
      const index = Math.floor(Math.random() * 7);
      return stayDurations[index];
    };
    let numberOfNightsBooked = 0;
    let sequenceOfStaysBooked = [];
    while (numberOfNightsBooked < targetNumberOfNightsBooked) {
      let tempDuration = getRandDuration();
      if (numberOfNightsBooked + tempDuration <= targetNumberOfNightsBooked) {
        numberOfNightsBooked += tempDuration;
        sequenceOfStaysBooked.push(tempDuration);
      } else {
        let remainderToMeetTarget = targetNumberOfNightsBooked - numberOfNightsBooked;
        numberOfNightsBooked += remainderToMeetTarget;
        sequenceOfStaysBooked.push(remainderToMeetTarget);
      }      
    }
    let availabilityModel = [];
    let spacingRemaining = 28 - numberOfNightsBooked;
    const AvgMinGapBetweenStays = Math.floor(spacingRemaining / sequenceOfStaysBooked.length);
    for (let i = 0; i < sequenceOfStaysBooked.length; i++) {
      if (availabilityModel.length <= 28) {
        for (let j = 0; j < sequenceOfStaysBooked[j]; j++) {
          availabilityModel.push(1);
        }
        for (let k = 0; k < AvgMinGapBetweenStays; k++) {
          availabilityModel.push(0);
        }
      }
    }
    this.setState({ availabilityModel: availabilityModel });
  }

  getDateInfoForSelectedYear(year) {
    var dateReferenceHolder = [];
    const monthNames = moment.months();
    const selectYear = moment().year();
    const month = moment().get('month');
    const selectMonth = monthNames[month];

    for (var i = 0; i < monthNames.length; i++) {
      var fullMonthName = monthNames[i];
      var firstDayName = moment().month(monthNames[i]).startOf('month').format('dddd');
      var daysInMonth = moment().month(monthNames[i]).daysInMonth();
      dateReferenceHolder.push([fullMonthName, firstDayName, daysInMonth]);
    }
    this.setState({
      dates: dateReferenceHolder,
      selectDates: [selectMonth, selectYear]
    }, () => {
        this.determineStructureOfCalendarForSelectedMonth(month);
    });
  }
  determineStructureOfCalendarForSelectedMonth(month) {
    const weekDays = moment.weekdays();
    var offSet = weekDays.indexOf(this.state.dates[month][1]);
    var monthLen = this.state.dates[month][2];
    var rowAmount = Math.ceil(((offSet + monthLen) / 7));
    var calendar = [];
    var curDay = 1;
    for (var i = 0; i < rowAmount; i++) {
      calendar.push(this.buildCalendarRowForSelectedMonth(i, offSet, curDay, monthLen));
      if (!i) {
        curDay += (7 - offSet);
      } else {
        curDay += 7;
      }
    }
    this.setState({ selectMonthCalendar: calendar });
    
  }
  buildCalendarRowForSelectedMonth(curRow, offSet, curCalDayNum, monthLen) {
  var calRowVals = [];
    for (var i = 0; i < 7; i += 1) {
      curRow ? offSet = 0 : offSet;
      if (offSet) {
        calRowVals.push(null);
        offSet -= 1;
      } else if (curCalDayNum > monthLen) { 
        calRowVals.push(null);
      } else {
        calRowVals.push(curCalDayNum);
        curCalDayNum += 1;
      }  
    }
  return calRowVals;
  }
  
  render() {
    var calendarStructure = this.state.selectMonthCalendar;
    var calendar = calendarStructure.map(days => (
      <CalendarRow availabilityModel={this.state.availabilityModel} days={days} />
    ));
    return (
      <div>
        <div>
          <Booking
            onGuestCountChangeClick={this.onGuestCountChangeClick}
            onGuestMenuExpandClick={this.onGuestMenuExpandClick}
            guests={this.state.guests}
            currentShow={this.state.currentShow}
            showCal={this.state.showCal}
            onShowOrHideCalClick={this.onShowOrHideCalClick}
            buildCalendarRowForSelectedMonth={this.buildCalendarRowForSelectedMonth}
            determineStructureOfCalendarForSelectedMonth={this.determineStructureOfCalendarForSelectedMonth}
            onCalendarChangeClick={this.onCalendarChangeClick}
            selectDates={this.state.selectDates}
            calendar={calendar}
          />
        </div>
      </div>
    );
  }
}

export {
  BookingContainer
}