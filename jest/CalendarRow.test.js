import { shallow, mount } from 'enzyme';
import React from 'react';
import { CalendarRow } from '../client/components/CalendarRow';
import { CalendarCell } from '../client/components/CalendarCell';


describe('<CalendarRow/>', () => {
  test('should render seven CalendarCell components', () => {
    const wrapper = shallow(<CalendarRow availabilityModel={(a) => (a)} days={[1,2,3,4,5,6,7]} /> );
    expect(wrapper.find('CalendarCell').length).toBe(7);
    })
});