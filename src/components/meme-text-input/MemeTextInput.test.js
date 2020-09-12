import { shallow, render } from 'enzyme';
import React from 'react';
import MemeTextInput from './MemeTextInput';

let shallowWrapper;
let renderWrapper;
beforeEach(() => {
    const onTextInputFunction = jest.fn();
    const mockProps = {
        label: "Text",
        id: "memeText",
        labelText: "Text",
        placeholder: "Text",
        onTextInput: onTextInputFunction
    }
    shallowWrapper = shallow(<MemeTextInput {...mockProps} />);
    renderWrapper = render(<MemeTextInput {...mockProps} />);
})


it('expects to render meme text input', () => {
    expect(renderWrapper).toMatchSnapshot();
});

it('expects to call props on enter key',()=>{
    const onTextInputFunction = jest.fn();
    const mockProps = {
        label: "Text",
        id: "memeText",
        labelText: "Text",
        placeholder: "Text",
        onTextInput: onTextInputFunction
    }
    let shallowWrapper = shallow(<MemeTextInput {...mockProps} />);
    shallowWrapper.find('.input').simulate('keydown', {key: 'Enter', target: {value: "BLAH"}});
    expect(onTextInputFunction).toHaveBeenCalledTimes(1);
    expect(onTextInputFunction).toHaveBeenCalledWith("BLAH");
})

it('expects to not call props on up key',()=>{
    const onTextInputFunction = jest.fn();
    const mockProps = {
        label: "Text",
        id: "memeText",
        labelText: "Text",
        placeholder: "Text",
        onTextInput: onTextInputFunction
    }
    let shallowWrapper = shallow(<MemeTextInput {...mockProps} />);
    shallowWrapper.find('.input').simulate('keydown', {key: 'up', target: {value: "BLAH"}});
    expect(onTextInputFunction).toHaveBeenCalledTimes(0);
})