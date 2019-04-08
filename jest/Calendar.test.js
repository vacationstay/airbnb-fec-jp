// import { shallow } from 'enzyme';
// import React from 'react';
// import { Calendar } from '../client/src/components/Calendar';
// import { CalendarHeader } from '../client/src/components/CalenderHeader';

// describe('<Calendar/>', () => {
//   test('applies appropriate class when the calendar month requires 6 rows', () => {
//     const wrapper = shallow(< Calendar buildCalendarRowForSelectedMonth={(a) => (a)} determineStructureOfCalendarForSelectedMonth={(a) => (a)} onCalendarChangeClick={(a) => (a)} calendar={[1, 2, 3, 4, 5, 6]} selectDates={(a) => (a)} />);
//     expect(wrapper.hasClass('calContainer calXL')).toBe(true);
//     })
//   test('applies calContainer class when the calendar month requires 5 rows', () => {
//     const wrapper = shallow(< Calendar buildCalendarRowForSelectedMonth={(a) => (a)} determineStructureOfCalendarForSelectedMonth={(a) => (a)} onCalendarChangeClick={(a) => (a)} calendar={[1, 2, 3, 4, 5]} selectDates={(a) => (a)} />);
//     expect(wrapper.hasClass('calContainer')).toBe(true);
//   })
//   test('does not apply calXL class when the calendar month requires 5 rows', () => {
//     const wrapper = shallow(< Calendar buildCalendarRowForSelectedMonth={(a) => (a)} determineStructureOfCalendarForSelectedMonth={(a) => (a)} onCalendarChangeClick={(a) => (a)} calendar={[1, 2, 3, 4, 5]} selectDates={(a) => (a)} />);
//     expect(wrapper.hasClass('calXL')).toBe(false);
//     })
// });