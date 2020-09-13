import { shallow, render } from 'enzyme';
import React from 'react';
import Modal from './Modal';

let shallowWrapper;
let renderWrapper;
beforeEach(() => { 
    shallowWrapper = shallow(<Modal />);
    renderWrapper = render(<Modal />);
})


it('expects to render meme text input', () => {
    expect(renderWrapper).toMatchSnapshot();
});

it('expects to toggle show modal state',()=>{
    const componentInstance = shallowWrapper.instance();
    const initialShowModalState = shallowWrapper.state.showModal;
    shallowWrapper.find(".close").simulate("click");
    expect(shallowWrapper.find(".close").length).toBe(1);
    expect(componentInstance.state.showModal).toBe(!initialShowModalState);
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