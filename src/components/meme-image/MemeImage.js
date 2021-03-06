import React from 'react';
import { fabric } from "fabric";
import "./meme-image.scss"

let fabricObject = {};
let canvas;

export default class MemeImage extends React.Component {

    componentDidMount() {
        canvas = new fabric.Canvas('memeCanvas');
    }



    constructor(props) {
        super(props);
        this.state = {
            memeTextObject: {},
        };
        this.memeColRef = React.createRef();
    }

    static getDerivedStateFromProps(props, state) {

        let stateChanges = {}

        if (props.memeTextObject !== state.memeTextObject) {
            stateChanges.memeTextObject = props.memeTextObject
        }

        return stateChanges;
    }

    getMemeDivWidth = (_) => this.memeColRef.current.offsetWidth;

    getAppropriateCanvasHeight = (memeWidth, memeHeight) => {
        let ratio = memeHeight / memeWidth;
        let newHeight = ratio * this.getMemeDivWidth();
        return newHeight;
    }

    componentDidUpdate(prevPrps, prevState) {

        console.log(this.state.memeTextObject);
        console.log(this.memeColRef.current.offsetWidth);
        let memeTextObject = this.state.memeTextObject;
        let imageToAddToMeme = this.props.imageToAddToMeme;

        this.loadCanvasData(canvas);

        if (this.props.memeBackgroundImage) {
            this.loadBackgroundImageToCanvas(canvas, this.props.memeBackgroundImage.url);
        }

        if (memeTextObject.text !== "" && prevPrps.memeTextObject.text !== this.state.memeTextObject.text) {
            this.addTextToCanvas(canvas, memeTextObject);
        }

        if (imageToAddToMeme) {
            this.addImageToMeme(canvas, imageToAddToMeme);
        }

        this.saveCanvasData(canvas);

        if (this.props.downloadCanvas) {
            this.setState({ memeTextObject: {} });
            this.props.onMemeTextClear();
            this.saveImage(canvas);
            this.deleteCanvasObjects(canvas);
        }

        if (this.props.resetCanvas) {
            this.deleteCanvasObjects(canvas);
            this.props.onCanvasReset();
        }

        canvas.on('mouse:out', (e) => this.handleMouseOut(e, canvas));



    }


    saveCanvasData(canvas) {
        fabricObject = JSON.stringify(canvas.toJSON());
    }

    addImageToMeme = (canvas, imageObject) => {
        let url = imageObject.url;

        fabric.Image.fromURL(url, function (image) {
            canvas.add(image);
        });

        this.props.onImageAddedToMeme();
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
        link.download = 'meme.png';
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
            let width = this.getMemeDivWidth();
            let height = this.getAppropriateCanvasHeight(meme.width, meme.height);
            canvas.setHeight(height);
            canvas.setWidth(width);
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
            <div ref={this.memeColRef}>
                <canvas id="memeCanvas" style={{ width: "100% !important", height: "auto" }} ></canvas>
            </div>
        )
    }
}
