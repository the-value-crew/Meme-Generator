import React from 'react';
import { fabric } from "fabric";

let fabricObject = {};
let canvas;

export default class MemeImage extends React.Component {

    componentDidMount() {
        canvas = new fabric.Canvas('memeCanvas');
    }

    state = {
        memeTextObject: {}
    }

    static getDerivedStateFromProps(props, state) {
        if (props.memeTextObject !== state.memeTextObject) {
            return {
                memeTextObject: props.memeTextObject
            }
        }
        return null;
    }

    componentDidUpdate(prevPrps, prevState) {

        console.log(this.state.memeTextObject);
        let memeTextObject = this.state.memeTextObject;

        this.loadCanvasData(canvas);
        let url;
        console.log(this.props.meme);
        if (this.props.memeBackgroundImage) {
            url = URL.createObjectURL(this.props.memeBackgroundImage);
        } else if (this.props.meme) {
            url = this.props.meme.url
        }

        this.loadBackgroundImageToCanvas(canvas, url);

        if (memeTextObject.text !== "" && prevPrps.memeTextObject.text !== this.state.memeTextObject.text) {
            this.addTextToCanvas(canvas, memeTextObject);
        }

        this.saveCanvasData(canvas);

        if (this.props.downloadCanvas) {
            this.setState({ memeTextObject: {} });
            this.props.onMemeTextClear();
            this.saveImage(canvas);
            this.deleteCanvasObjects(canvas);
            console.log(fabricObject);
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
        console.log("Chaliraxa add text");
        canvas.add(new fabric.Text(memeTextObject.text, {
            fontFamily: memeTextObject.settings.fontFamily,
            fill: memeTextObject.settings.color,
            left: 100,
            top: 100
        }));
    }


    loadBackgroundImageToCanvas(canvas, url) {

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

        // this.props.onBackgroundImageSetFromUpload;
    }


    render() {
        return (
            <div>
                <canvas id="memeCanvas" style={{ width: "100%", height: "auto" }} />
            </div>
        )
    }
}
