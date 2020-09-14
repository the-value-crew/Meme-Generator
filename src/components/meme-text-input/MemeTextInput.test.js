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

it('expects to call props on enter key', async () => {
    const onTextInputFunction = jest.fn();
    const mockProps = {
        label: "Text",
        id: "memeText",
        labelText: "Text",
        placeholder: "Text",
        onTextInput: onTextInputFunction
    };
    const mockReturnValue = { "settings": { "color": "#000000", "fontFamily": "Impact" }, "text": "BLAH" };
    let shallowWrapper = shallow(<MemeTextInput {...mockProps} />);
    await shallowWrapper.find('.input').simulate('keydown', { key: 'Enter', target: { value: "BLAH" } });
    expect(onTextInputFunction).toHaveBeenCalledTimes(1);
    expect(onTextInputFunction).toHaveBeenCalledWith(mockReturnValue);
})

it('expects to not call props on up key', () => {
    const onTextInputFunction = jest.fn();
    const mockProps = {
        label: "Text",
        id: "memeText",
        labelText: "Text",
        placeholder: "Text",
        onTextInput: onTextInputFunction
    }
    let shallowWrapper = shallow(<MemeTextInput {...mockProps} />);
    shallowWrapper.find('.input').simulate('keydown', { key: 'up', target: { value: "BLAH" } });
    expect(onTextInputFunction).toHaveBeenCalledTimes(0);
});

it('expects to get appropriate response on meme settings called', async () => {
    const settings = {
        settings: {
            color: "#000000",
            fontFamily: "Impacto"
        }
    };
    const expectedReturn = {
        text: '',
        settings: { settings: { color: '#000000', fontFamily: 'Impacto' } }
    };
    const componentInstance = shallowWrapper.instance();
    componentInstance.getMemeSettings(settings);
    expect(componentInstance.state.textData).toEqual(expectedReturn);
});

it('expects to call prop on modal child prop',()=>{
    const mockFunction = jest.fn();
    shallowWrapper.instance().onClose = mockFunction();
    shallowWrapper.find('MemeTextSettingsModal').props().onClose();
    expect(mockFunction).toHaveBeenCalledTimes(1);
});