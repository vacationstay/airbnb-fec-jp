import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import moment from 'moment';
import { CalendarHeader } from './CalenderHeader.jsx';
import './styles.css';


export default class Calendar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        dates: [],
        selectMonthCalendar: [],
        selectDates: []
      }
      this.getDateInfoForSelectedYear = this.getDateInfoForSelectedYear.bind(this);
      this.determineStructureOfCalendarForSelectedMonth = this.determineStructureOfCalendarForSelectedMonth.bind(this);
      this.buildCalendarRowForSelectedMonth = this.buildCalendarRowForSelectedMonth.bind(this);
  }
  componentDidMount() {
      this.getDateInfoForSelectedYear(moment().year());
  }
  getDateInfoForSelectedYear(year) {
    var dateReferenceHolder = [];
    const monthNames = moment.months();
    const selectYear = moment().year();
    // TEMP FOR TEST
    // open to create an extend cal method for 40px
    
    const month = 1;
    // const month = moment().get('month');
    const selectMonth = monthNames[month];

    for (var i = 0; i < monthNames.length; i++) {
      var fullMonthName = monthNames[month];
      var firstDayName = moment().month(month).startOf('month').format('dddd');
      var daysInMonth = moment().month(month).daysInMonth();
      dateReferenceHolder.push([fullMonthName, firstDayName, daysInMonth]);
    }
    this.setState({
      dates: dateReferenceHolder,
      selectDates: [selectMonth, selectYear]
    }, () => (this.determineStructureOfCalendarForSelectedMonth(month)));
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
  var calendar = calendarStructure.map(days => <CalendarRow days={days} />);
    
    return (
      <div className='calContainer'>
        <div >
          <CalendarHeader selectDates={this.state.selectDates}/>
        </div>
        <div className='calInner'>
          {calendar}
        </div>
      </div>
  )
  }
}

function CalendarCell(props) {
  return (
      <div className='calDay'>{props.day}</div>
  )
}

function CalendarRow(props) {
  return (
    <div className='calRow'>
    <CalendarCell day={props.days[0]} /> <CalendarCell day={props.days[1]} /> <CalendarCell day={props.days[2]} /> <CalendarCell day={props.days[3]} />
      <CalendarCell day={props.days[4]} /> <CalendarCell day={props.days[5]} /> <CalendarCell day={props.days[6]} /> 
    </div>
  )
}



 