import { shallow } from 'enzyme';
import React from 'react';
import { CalendarCell } from '../client/src/components/CalendarCell.jsx';

describe('<CalendarCell/>', () => {
  test('applies appropriate class for unbooked and non-calendar day', () => {
    const wrapper = shallow(< CalendarCell availabilityModel={0} day={null} />);
    expect(wrapper.hasClass('calDay calDayNull')).toBe(true);
    })
  test('applies appropriate class for unbooked and calender day', () => {
    const wrapper = shallow(< CalendarCell availabilityModel={0} day={12} />);
    expect(wrapper.hasClass('calDay')).toBe(true);
    })
  test('applies appropriate class for booked and calendar day', () => {
    const wrapper = shallow(< CalendarCell availabilityModel={1} day={25} />);
    expect(wrapper.hasClass('calDay calDayBooked')).toBe(true);
    })
});