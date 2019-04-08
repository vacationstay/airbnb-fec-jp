import { shallow, mount } from 'enzyme';
import React from 'react';
import { CalendarHeader } from '../client/src/components/CalenderHeader';

describe('<CalendarHeader/>', () => {
  test('should register clicks to change calendar to previous month', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<CalendarHeader buildCalendarRowForSelectedMonth={(a) => (a)} determineStructureOfCalendarForSelectedMonth={(a) => (a)} onCalendarChangeClick={mockCallBack} selectDates={[1, 2]} />);
    expect(mockCallBack.mock.calls.length).toEqual(0);
    wrapper.find('div.calHeadBtn.calHeadLeft').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
  test('should register clicks to change calendar to next month', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<CalendarHeader buildCalendarRowForSelectedMonth={(a) => (a)} determineStructureOfCalendarForSelectedMonth={(a) => (a)} onCalendarChangeClick={mockCallBack} selectDates={[1, 2]} />);
    expect(mockCallBack.mock.calls.length).toEqual(0);
    wrapper.find('div.calHeadBtn.calHeadRight').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
});