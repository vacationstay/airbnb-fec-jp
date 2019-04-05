import { shallow, mount } from 'enzyme';
import React from 'react';
import { BookingContainer } from '../client/components/BookingContainer';
import { Booking } from '../client/components/Booking';
import { CalendarRow } from '../client/components/CalendarRow';
// import { isTSAnyKeyword } from '@babel/types';

describe('<BookingContainer/>', () => {
  test('should set the selectMonthCalendar as nested arrays to model the current month (April)', () => {
    const wrapper = shallow(<BookingContainer />);
    const expectCalendar = [
      [null, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30, null, null, null, null]
    ];
    expect(wrapper.state().selectMonthCalendar).toEqual(expectCalendar)
  })
  test('should set availabilityModel in state to an array of min length 20', () => {
    const wrapper = mount(< BookingContainer />);
    const instance = wrapper.instance();
    expect(wrapper.state('availabilityModel')).toEqual([]);
    instance.modelAvailabilityForSelectedRoom(36);
    expect(wrapper.state().availabilityModel.length).toBeGreaterThanOrEqual(20);
  })
  test('should set availabilityModel in state to an array of max length 40', () => {
    const wrapper = mount( < BookingContainer /> );
    const instance = wrapper.instance();
    expect(wrapper.state('availabilityModel')).toEqual([]);
    instance.modelAvailabilityForSelectedRoom(80);
    expect(wrapper.state('availabilityModel').length).toBeLessThanOrEqual(40);
  })
  test('should modify state to previous month calendar when clickHandler is called with false', () => {
    const initialCalendar = [
      [null, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30, null, null, null, null]
    ];
    const previousCalendar = [
      [null, null, null, null, null, 1, 2],
      [3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23],
      [24, 25, 26, 27, 28, 29, 30],
      [31, null, null, null, null, null, null]
    ];
    const wrapper = mount(< BookingContainer />);
    const instance = wrapper.instance();
    expect(wrapper.state().selectMonthCalendar).toEqual(initialCalendar);
    instance.onCalendarChangeClick(false);
    expect(wrapper.state().selectMonthCalendar).toEqual(previousCalendar);
  })
  test('should modify state to next month calendar when clickHandler is called with true', () => {
    const initialCalendar = [
      [null, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30, null, null, null, null]
    ];
    const nextCalendar = [
      [null, null, null, 1, 2, 3, 4],
      [5, 6, 7, 8, 9, 10, 11],
      [12, 13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24, 25],
      [26, 27, 28, 29, 30, 31, null]
    ];
    const wrapper = mount( < BookingContainer /> );
    const instance = wrapper.instance();
    expect(wrapper.state().selectMonthCalendar).toEqual(initialCalendar);
    instance.onCalendarChangeClick(true);
    expect(wrapper.state().selectMonthCalendar).toEqual(nextCalendar);
  })

})

