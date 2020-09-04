import React, { Component } from 'react'
import "./meme-selection-image.scss";

export default class MemeSelectionImage extends Component {
    render() {
        const memeSelectionImageStyle = (meme) => {
            return {
                backgroundImage: `url(${meme})`,
                backgroundPosition: "center center",
                backgroundSize: "contain"
            }
        }
        return (
            <div className="meme-selection-image" style={memeSelectionImageStyle(this.props.meme.url)} >
            </div>
        )
    }
}
