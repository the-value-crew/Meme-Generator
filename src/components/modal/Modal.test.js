import { shallow, render } from 'enzyme';
import React from 'react';
import Modal from './Modal';

let shallowWrapper;
let renderWrapper;
beforeEach(() => { 
    shallowWrapper = shallow(<Modal showModal={true}/>);
    renderWrapper = render(<Modal showModal={true}/>);
})


it('expects to render meme text input', () => {
    expect(renderWrapper).toMatchSnapshot();
});

it('expects correct style on state value ', () => {
    const componentInstance = shallowWrapper.instance();
    const trueStyle = {
        display: "block"
    };
    const falseStyle = {
        display: "none"
    }
    expect(componentInstance.getAppropriateStyle(true)).toEqual(trueStyle);
    expect(componentInstance.getAppropriateStyle(false)).toEqual(falseStyle);
});

it('expects to call on close modal prop', () => {
    const mockFunction = jest.fn();
    const shallowWrapper = shallow(<Modal
        showModal={true} onClose={mockFunction} />);
    shallowWrapper.find('.close').simulate("click");
    expect(mockFunction).toHaveBeenCalledTimes(1);
});