import React, { Component } from 'react';
import { fabric } from "fabric";

let fabricObject = {};

export default class MemeImage extends Component {

    componentDidUpdate() {
        const canvas = new fabric.Canvas('memeCanvas');
        let memeText = this.props.memeText;
        console.log(memeText);

        this.loadCanvasData(canvas);

        this.loadBackgroundImageToCanvas(canvas, this.props.meme);

        this.addTextToCanvas(canvas, memeText);

        this.saveCanvasData(canvas);

        canvas.on('mouse:out', (e) => this.handleMouseOut(e, canvas));

    }

    saveCanvasData(canvas) {
        fabricObject = JSON.stringify(canvas.toJSON());
    }

    handleMouseOut(e, canvas) {
        console.log("Moved");
        this.saveCanvasData(canvas);
        canvas.renderAll();
    }

    loadCanvasData(canvas) {
        canvas.loadFromJSON(fabricObject, function () {
            canvas.renderAll();
        });
    }

    addTextToCanvas(canvas, text) {
        canvas.add(new fabric.Text(text, {
            fontFamily: 'Impact',
            left: 100,
            top: 100
        }));
    }

    loadBackgroundImageToCanvas(canvas, meme) {
        const { url } = meme;

        fabric.Image.fromURL(url, function (meme) {
            canvas.setWidth(400);
            canvas.setHeight(meme.height);
            canvas.setBackgroundImage(meme, canvas.renderAll.bind(canvas), {
                scaleX: canvas.width / meme.width,
                scaleY: canvas.height / meme.height
            });
        });
    }

    componentDidMount() {
        console.log("Rerendered");
    }

    render() {
        return (
            <div>
                <canvas id="memeCanvas" style={{ width: "100%", height: "auto" }} data-meme={this.props.meme.url} />
            </div>
        )
    }
}
