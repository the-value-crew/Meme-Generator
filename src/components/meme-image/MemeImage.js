import React, { Component } from 'react';
import { fabric } from "fabric";


export default class MemeImage extends Component {

    componentDidMount() {
        const canvas = new fabric.Canvas('c');

        fabric.Image.fromURL(this.props.meme, function (myImg) {
            //i create an extra var for to change some image properties
            canvas.setHeight(myImg.height);
            canvas.setWidth(myImg.width);
            canvas.setBackgroundImage(myImg, canvas.renderAll.bind(canvas), {
                scaleX: canvas.width / myImg.width,
                scaleY: canvas.height / myImg.height
            });

        })
    }

    render() {
        return (
            <div>
                <canvas id="c" />
            </div>
        )
    }
}
