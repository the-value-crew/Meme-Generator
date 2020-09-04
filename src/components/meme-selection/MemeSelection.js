import React from 'react';
import meme from '../../assets/images/meme.png'
import "./meme-selection.scss";
import api from '../../utils/api';
import MemeSelectionImage from "../meme-selection-image/MemeSelectionImage";

class MemeSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memes: []
        }
    }

    componentDidMount() {
        this.props.memes.then(({ memes }) => {
            this.setState({
                memes: memes
            });
        });
    }

    render() {
        return (
            <div>
                <h4>Popular</h4>
                <div className="meme-selection-container">
                    {this.state.memes.map(meme => (
                        <MemeSelectionImage meme={meme} />
                    ))}
                </div>
            </div>
        )
    }
}

export default MemeSelection;
