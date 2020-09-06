import React, { Component } from 'react';
import { fabric } from "fabric";


export default class MemeImage extends Component {

    componentDidUpdate() {
        const { url } = this.props.meme;
        const canvas = new fabric.Canvas('memeCanvas');

        console.log("Meme Image Vitra");
        console.log(this.props.meme);

        fabric.Image.fromURL(url, function (meme) {
            canvas.setBackgroundImage(meme, canvas.renderAll.bind(canvas), {
                scaleX: canvas.width / meme.width,
                scaleY: canvas.height / meme.height
            });
        });
    }

    render() {
        return (
            <div>
                <canvas id="memeCanvas" style={{width: "100%", height: "auto"}} data-meme={this.props.meme.url} />
            </div>
        )
    }
}
