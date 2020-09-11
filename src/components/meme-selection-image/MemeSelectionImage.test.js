import { shallow, render } from 'enzyme';
import React from 'react';
import MemeSelectionImage from './MemeSelectionImage';


it('expects to render meme image', () => {
    const mockProps =  {
        meme: {
            "id": "181913649",
            "name": "Drake Hotline Bling",
            "url": "https://i.imgflip.com/30b1gx.jpg",
            "width": 1200,
            "height": 1200,
            "box_count": 2
        }
    }
    expect(render(<MemeSelectionImage {...mockProps} />)).toMatchSnapshot();
});

it('expects to call appropriate props on div click', () => {
    const onMemeSelectionFunction = jest.fn();
    const mockMeme = {
        "id": "181913649",
        "name": "Drake Hotline Bling",
        "url": "https://i.imgflip.com/30b1gx.jpg",
        "width": 1200,
        "height": 1200,
        "box_count": 2
    };
    const mockProps = {
        meme: {
            "id": "181913649",
            "name": "Drake Hotline Bling",
            "url": "https://i.imgflip.com/30b1gx.jpg",
            "width": 1200,
            "height": 1200,
            "box_count": 2
        },
        onMemeSelection: onMemeSelectionFunction
    };
    let shallowWrapper = shallow(<MemeSelectionImage {...mockProps} />);

    const componentInstance = shallowWrapper.instance();
    componentInstance.onMemeSelection(mockMeme);
    shallowWrapper.find(".meme-selection-image").simulate('click');
    expect(onMemeSelectionFunction).toHaveBeenCalledTimes(2);
    expect(onMemeSelectionFunction).toHaveBeenCalledWith(mockMeme);
});

it('expects to return appropriate style from function', () => {
    const onMemeSelectionFunction = jest.fn();
    const mockMeme = {
        "id": "181913649",
        "name": "Drake Hotline Bling",
        "url": "https://i.imgflip.com/30b1gx.jpg",
        "width": 1200,
        "height": 1200,
        "box_count": 2
    };
    const mockProps = {
        meme: {
            "id": "181913649",
            "name": "Drake Hotline Bling",
            "url": "https://i.imgflip.com/30b1gx.jpg",
            "width": 1200,
            "height": 1200,
            "box_count": 2
        },
        onMemeSelection: onMemeSelectionFunction
    };

    const mockStyle = {
        backgroundImage: "url(https://i.imgflip.com/30b1gx.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundSize: "cover"
    }
    let shallowWrapper = shallow(<MemeSelectionImage {...mockProps} />);

    const componentInstance = shallowWrapper.instance();
    const returnedStyle = componentInstance.memeSelectionImageStyle(mockMeme.url);
    expect(returnedStyle).toEqual(mockStyle);
    

});