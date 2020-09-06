import React, { Component } from 'react'
import "./meme-selection-image.scss";

export default class MemeSelectionImage extends Component {

    onMemeSelection(meme) {
        this.props.onMemeSelection(meme);
    }

    render() {
        const memeSelectionImageStyle = (meme) => {
            return {
                backgroundImage: `url(${meme})`,
                backgroundPosition: "center center",
                backgroundSize: "contain",
                backgroundSize: "cover"
            }
        }
        return (
            <div className="meme-selection-image" style={memeSelectionImageStyle(this.props.meme.url)} onClick={() => this.onMemeSelection(this.props.meme)} >
            </div>
        )
    }
}
