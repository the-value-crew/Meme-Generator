import React, { Component } from 'react';
import { fabric } from "fabric";


export default class MemeImage extends Component {

    componentDidMount() {
        const canvas = new fabric.Canvas('c');
        var rect = new fabric.Rect({
            left: 100,
            top: 50,
            fill: '#D81B60',
            width: 50,
            height: 50,
            strokeWidth: 2,
            stroke: "#880E4F",
            rx: 10,
            ry: 10,
            angle: 45,
            scaleX: 3,
            scaleY: 3,
            hasControls: true
        });

        canvas.add(rect);
    }

    render() {
        return (
            <div>
                <img src={this.props.meme} alt="Meme Create" />
                <canvas id="c" />
            </div>
        )
    }
}
