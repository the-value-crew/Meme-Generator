import { shallow, render } from 'enzyme';
import React from 'react';
import App from './App';

let shallowWrapper;
let renderWrapper;
beforeEach(() => {
    shallowWrapper = shallow(<App />);
    renderWrapper = render(<App />);
})


// it('expects to render app', () => {
//     expect(renderWrapper).toMatchSnapshot();
// });

it('expects to change current meme', () => {
    const mockMeme = {
        "id": "181913649",
        "name": "Drake Hotline Bling",
        "url": "https://i.imgflip.com/30b1gx.jpg",
        "width": 1200,
        "height": 1200,
        "box_count": 2
    };
    const componentInstance = shallowWrapper.instance();
    expect(componentInstance.state.currentMeme).toEqual({});
    componentInstance.onMemeSelection(mockMeme);
    expect(componentInstance.state.currentMeme).toEqual(mockMeme);
})

it('expects to change memeText state', () => {
    const mockText = {
        memeTextSettings: {
            color: "#000000",
            fontFamily: "Impact"
        },
        text: "Alu bhannta gobi"
    };
    const componentInstance = shallowWrapper.instance();
    expect(componentInstance.state.textData.text).toEqual("");
    componentInstance.onTextInput(mockText);
    expect(componentInstance.state.textData).toEqual(mockText);
})