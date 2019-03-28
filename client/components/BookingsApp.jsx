import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import dataFns from 'date-fns';
import moment from 'moment';

// export default class Booking extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div className='butts'>test</div>
//         )
//     }
// }

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: null,
            selectMonthCalendar: []
        }
        this.getDateInfoForSelectedYear = this.getDateInfoForSelectedYear.bind(this);
        this.determineStructureOfCalendarForSelectedMonth = this.determineStructureOfCalendarForSelectedMonth.bind(this);
        this.buildCalendarRowForSelectedMonth = this.buildCalendarRowForSelectedMonth.bind(this);
    }
    componentDidMount() {
        this.getDateInfoForSelectedYear(moment().year());
    }
    getDateInfoForSelectedYear(year) {
        // format for holder: [[monthName, weekdayOfFirstDay, daysInMonth], [monthName, weekdayOfFirstDay, daysInMonth] ...]
        var dateReferenceHolder = [];
        const monthsRef = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        for (var i = 0; i < 12; i++) {
            var month = monthsRef[i];
            var first = moment().month(i).startOf('month').format('dddd');
            var last = moment().month(i).daysInMonth();
            dateReferenceHolder.push([month, first, last]);
        }
        this.setState({
            dates: dateReferenceHolder
        }, () => (this.determineStructureOfCalendarForSelectedMonth()));
    }
    determineStructureOfCalendarForSelectedMonth() {
        // TO DO selected month will either need to be passed in or saved in state
        var i = 2;
        // TEMP MONTH i FOR TEST
        const dowRef = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var offSet = dowRef.indexOf(this.state.dates[i][1]);
        var monthLen = this.state.dates[i][2];
        var rowAmount = Math.ceil(((offSet + monthLen) / 7));
        var calendar = [];
        var curDay = 1;
        for (var i = 0; i < rowAmount; i++) {
            //need to debug infinite loop here - removed method invoke to avoid break
            if (i) {
                console.log('create first row called');
                // calendar.push(this.buildCalendarRowForSelectedMonth(curDay, offSet));
                curDay += (7 - offSet);
            } else if (i === rowAmount - 1) {
                
                console.log('create last row called');
                // calendar.push(this.buildCalendarRowForSelectedMonth(curDay, null, monthLen));
            } else {
                console.log('create other row called');
                // calendar.push(this.buildCalendarRowForSelectedMonth(curDay, null));
                curDay += 7;
            }
        }
        this.setState({ selectMonthCalendar: calendar });
    }
    // open to debug - 
    buildCalendarRowForSelectedMonth(curNum, offSet, lastRowDay) {
        var row = [];
        if (offSet) {
            for (var i = 0; i < 7; i++) {
                if (i < offSet) {
                    row.push(<CalendarCell num={ null } />);
                } else {
                    row.push(<CalendarCell num={curNum} />);
                } 
                curNum++;
                console.log('hit 1');
            }
            row.push(<br></br>);
            return row;
        } else if (lastRowDay) {
            for (var i = curNum; i < lastRowDay; i++) {
                row.push(<CalendarCell num={curNum} />);
                curNum++;
                console.log('hit 1');
            }
            row.push(<br></br>);
            return row;
        } else {
            for (var i = curNum; i < curNum + 7; i++) {
                row.push(<CalendarCell num={curNum} />);
                curNum++;
            }
            row.push(<br></br>);
            return row;
        }
    }
    render() {
        var calendar = this.state.selectMonthCalendar;
        return (
            <div>
                {calendar}
            </div>
        )
    }
}
function CalendarCell(props) {
    return (
        <div>{props.num}</div>
    )
}
export {
    Calendar
}



 