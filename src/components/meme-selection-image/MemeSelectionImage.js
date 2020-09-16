import React, { Component } from 'react'
import "./meme-selection-image.scss";

export default class MemeSelectionImage extends Component {

    onMemeSelection(meme) {
        this.props.onMemeSelection(meme);
    }

    memeSelectionImageStyle = (url) => {
        return {
            backgroundImage: `url(${url})`,
            backgroundPosition: "center center",
            backgroundSize: "cover"
        }
    }

    render() {
        
        return (
            <div className="meme-selection-image" style={this.memeSelectionImageStyle(this.props.meme.url)} onClick={() => this.onMemeSelection(this.props.meme)} >
            </div>
        )
    }
}
