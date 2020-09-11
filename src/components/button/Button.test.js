import {shallow,render} from 'enzyme';
import React from 'react';
import Button from './Button';

let shallowWrapper;
let renderWrapper;
beforeEach(() => {
    const mockProps = {
        onClick: jest.fn(),
        classes: "--black",
        buttonIcon: null,
        isPending: false
    }
    shallowWrapper = shallow(<Button {...mockProps} />);
    renderWrapper = render(<Button {...mockProps} />);
})

it('expects to render button',()=>{
    expect(renderWrapper).toMatchSnapshot();
})