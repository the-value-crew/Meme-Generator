import React, { Component } from 'react';
import { fabric } from "fabric";

let fabricObject = {};
let canvas;

export default class MemeImage extends Component {

    componentDidMount(){
        canvas =  new fabric.Canvas('memeCanvas');
    }

    componentDidUpdate() {
        let memeTextObject = this.props.memeText;

        this.loadCanvasData(canvas);

        this.loadBackgroundImageToCanvas(canvas, this.props.meme);

        if (memeTextObject.text != "") {
            this.addTextToCanvas(canvas, memeTextObject);
        }

        this.saveCanvasData(canvas);

        if (this.props.downloadCanvas) {
            console.log(canvas);
            this.saveImage(canvas);
            this.deleteCanvasObjects(canvas);
            console.log(fabricObject);
            this.props.onMemeTextClear();
        }

        if (this.props.resetCanvas) {
            this.deleteCanvasObjects(canvas);
            console.log(fabricObject);
            this.props.onCanvasReset();
        }

        canvas.on('mouse:out', (e) => this.handleMouseOut(e, canvas));

    }

    saveCanvasData(canvas) {
        fabricObject = JSON.stringify(canvas.toJSON());
    }

    deleteCanvasObjects(canvas) {
        fabricObject = JSON.stringify(canvas.remove(...canvas.getObjects()));
    }

    saveImage = (canvas) => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL({
            format: 'jpeg',
            quality: 0.8
        });
        link.download = 'canvas.png';
        link.click();
        this.onImageSaved();
    }

    onImageSaved = () => {
        this.props.onImageDownloaded(true);
    }


    handleMouseOut(e, canvas) {
        fabricObject = this.saveCanvasData(canvas);
        canvas.renderAll();
    }

    loadCanvasData = (canvas) => {
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


    render() {
        return (
            <div>
                <canvas id="memeCanvas" style={{ width: "100%", height: "auto" }} data-meme={this.props.meme.url} />
            </div>
        )
    }
}
