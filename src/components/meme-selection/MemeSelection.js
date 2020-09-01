import React from 'react';
import meme from '../../assets/images/meme.png'
import "./meme-selection.scss";

export default function MemeSelection() {
    const memeSelectionImage = {
        backgroundImage: `url(${meme})`,
        backgroundPosition: "center center",
        backgroundSize: "contain"
    }
    return (
        <div>
            <h4>Popular</h4>
            <div className="meme-selection-container">
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
                <div className="meme-selection-image" style={memeSelectionImage} >
                </div>
            </div>
        </div>
    )
}
