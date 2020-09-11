import React from 'react';
import "./meme-selection.scss";
import MemeSelectionImage from "../meme-selection-image/MemeSelectionImage";

class MemeSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memes: [],
        }
    }

    componentDidMount() {
        this.props.memes.then(({ memes }) => {
            this.setState({
                memes: memes
            });
        });
    }

    onMemeSelection = (meme) => {
        this.props.onMemeSelection(meme);
    }


    render() {
        return (
            <div>
                <h4>Popular</h4>
                <div className="meme-selection-container">
                    {this.state.memes.map((meme, i) => (
                        <MemeSelectionImage key={i} meme={meme} onMemeSelection={this.onMemeSelection} />
                    ))}
                </div>
            </div>
        )
    }
}

export default MemeSelection;
