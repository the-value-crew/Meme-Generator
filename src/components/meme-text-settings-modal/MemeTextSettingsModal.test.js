import { shallow, render } from 'enzyme';
import React from 'react';
import MemeTextSettingsModal from './MemeTextSettingsModal';

let shallowWrapper;
let renderWrapper;
beforeEach(() => {
    shallowWrapper = shallow(<MemeTextSettingsModal showModal={true} />);
    renderWrapper = render(<MemeTextSettingsModal showModal={true} />);
})


// it('expects to render meme text input', () => {
//     expect(renderWrapper).toMatchSnapshot();
// });

it('expects to change color state on keypress', () => {
    const componentInstance = shallowWrapper.instance();
    shallowWrapper.find('#hex-color-input').simulate('keydown', {key: 'Enter', target: {value: "#ffffff"}});
    const stateColor =  componentInstance.state.memeTextSettings.color;
    expect(stateColor).toEqual("#ffffff");
});

it('expects to change fontFamily state on keypress', () => {
    const componentInstance = shallowWrapper.instance();
    shallowWrapper.find('#fonts').simulate('change', {target: {value: "Impact"}});
    const fontFamily =  componentInstance.state.memeTextSettings.fontFamily;
    expect(fontFamily).toEqual("Impact");
});

it('expects to call props on button click', ()=>{
    let getMemeSettingsCallback = jest.fn();
    let mockProps = {
        showModal: true,
        getMemeSettings: getMemeSettingsCallback
    };
    let shallowWrapper = shallow(<MemeTextSettingsModal {...mockProps} />);
    const componentInstance = shallowWrapper.instance();
    componentInstance.getMemeTextSettings();

    expect(getMemeSettingsCallback).toHaveBeenCalledTimes(1);
});
