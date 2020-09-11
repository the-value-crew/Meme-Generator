import { shallow, render } from 'enzyme';
import React from 'react';
import MemeSelection from './MemeSelection';

let shallowWrapper;
let renderWrapper;
beforeEach(() => {
    const mockProps = {
        memes: Promise.resolve({
            memes: [
                {
                    "id": "181913649",
                    "name": "Drake Hotline Bling",
                    "url": "https://i.imgflip.com/30b1gx.jpg",
                    "width": 1200,
                    "height": 1200,
                    "box_count": 2
                },
                {
                    "id": "112126428",
                    "name": "Distracted Boyfriend",
                    "url": "https://i.imgflip.com/1ur9b0.jpg",
                    "width": 1200,
                    "height": 800,
                    "box_count": 3
                },
                {
                    "id": "87743020",
                    "name": "Two Buttons",
                    "url": "https://i.imgflip.com/1g8my4.jpg",
                    "width": 600,
                    "height": 908,
                    "box_count": 2
                },
                {
                    "id": "129242436",
                    "name": "Change My Mind",
                    "url": "https://i.imgflip.com/24y43o.jpg",
                    "width": 482,
                    "height": 361,
                    "box_count": 2
                }
            ]
        }),
        onMemeSelection: jest.fn()
    }
    shallowWrapper = shallow(<MemeSelection {...mockProps} />);
    renderWrapper = render(<MemeSelection {...mockProps} />);
})

it('expects to render meme selection component', () => {
    expect(renderWrapper).toMatchSnapshot();
});

it('expects to update state with props recieved memes', async () => {
    const mockMemes = [
        {
            "id": "181913649",
            "name": "Drake Hotline Bling",
            "url": "https://i.imgflip.com/30b1gx.jpg",
            "width": 1200,
            "height": 1200,
            "box_count": 2
        },
        {
            "id": "112126428",
            "name": "Distracted Boyfriend",
            "url": "https://i.imgflip.com/1ur9b0.jpg",
            "width": 1200,
            "height": 800,
            "box_count": 3
        },
        {
            "id": "87743020",
            "name": "Two Buttons",
            "url": "https://i.imgflip.com/1g8my4.jpg",
            "width": 600,
            "height": 908,
            "box_count": 2
        },
        {
            "id": "129242436",
            "name": "Change My Mind",
            "url": "https://i.imgflip.com/24y43o.jpg",
            "width": 482,
            "height": 361,
            "box_count": 2
        }
    ];
    const componentInstance = shallowWrapper.instance();
    await componentInstance.componentDidMount();
    expect(componentInstance.state.memes).toEqual(mockMemes);
});

it('expects to call appropriate method on method call', () => {
    const mockMeme = {
        "id": "181913649",
        "name": "Drake Hotline Bling",
        "url": "https://i.imgflip.com/30b1gx.jpg",
        "width": 1200,
        "height": 1200,
        "box_count": 2
    };
    const onMemeSelectionFunction = jest.fn();
    const mockProps = {
        memes: Promise.resolve({
            memes: [
                {
                    "id": "181913649",
                    "name": "Drake Hotline Bling",
                    "url": "https://i.imgflip.com/30b1gx.jpg",
                    "width": 1200,
                    "height": 1200,
                    "box_count": 2
                },
                {
                    "id": "112126428",
                    "name": "Distracted Boyfriend",
                    "url": "https://i.imgflip.com/1ur9b0.jpg",
                    "width": 1200,
                    "height": 800,
                    "box_count": 3
                },
                {
                    "id": "87743020",
                    "name": "Two Buttons",
                    "url": "https://i.imgflip.com/1g8my4.jpg",
                    "width": 600,
                    "height": 908,
                    "box_count": 2
                },
                {
                    "id": "129242436",
                    "name": "Change My Mind",
                    "url": "https://i.imgflip.com/24y43o.jpg",
                    "width": 482,
                    "height": 361,
                    "box_count": 2
                }
            ]
        }),
        onMemeSelection: onMemeSelectionFunction
    };
    let shallowWrapper = shallow(<MemeSelection {...mockProps} />);

    const componentInstance = shallowWrapper.instance();
    componentInstance.onMemeSelection(mockMeme);
    expect(onMemeSelectionFunction).toHaveBeenCalledTimes(1);
    expect(onMemeSelectionFunction).toHaveBeenCalledWith(mockMeme);
});