import React, { Component } from 'react';
import { fabric } from "fabric";

let fabricObject = {};

export default class MemeImage extends Component {

    componentDidUpdate() {
        const canvas = new fabric.Canvas('memeCanvas');
        let memeTextObject = this.props.memeText;

        console.log(memeTextObject);

        this.loadCanvasData(canvas);

        this.loadBackgroundImageToCanvas(canvas, this.props.meme);

        this.addTextToCanvas(canvas, memeTextObject);

        this.saveCanvasData(canvas);

        if (this.props.downloadCanvas) {
            this.saveImage(canvas);
        }

        canvas.on('mouse:out', (e) => this.handleMouseOut(e, canvas));

    }

    saveCanvasData(canvas) {
        fabricObject = JSON.stringify(canvas.toJSON());
    }

    saveImage = (canvas) => {
        console.log("Save Image");
        let link = document.createElement("a");
        link.href = canvas.toDataURL({
            format: 'jpeg',
            quality: 0.8
        });
        link.download = 'canvas.png';
        link.click();
    }


    handleMouseOut(e, canvas) {
        this.saveCanvasData(canvas);
        canvas.renderAll();
    }

    loadCanvasData(canvas) {
        canvas.loadFromJSON(fabricObject, function () {
            canvas.renderAll();
        });
    }

    addTextToCanvas(canvas, memeTextObject) {
        canvas.add(new fabric.Text(memeTextObject.text, {
            fontFamily: memeTextObject.settings.fontFamily,
            fill: memeTextObject.settings.color,
            left: 100,
            top: 100
        }));
    }
    asdf() {
        console.log("Asdf");
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
        }.bind(this), {
            crossOrigin: 'anonymous'
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
