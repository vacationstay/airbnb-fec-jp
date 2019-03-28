import Emzyne from 'enzyme';
import React from 'react';
import TestC from './testC';

// const wrapper = shallow(<TestC />); 

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = Emzyne.shallow( < TestC debug /> );
        expect(component).toMatchSnapshot();
    });
});