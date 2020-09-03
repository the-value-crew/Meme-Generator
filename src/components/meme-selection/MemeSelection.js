import React from 'react';
import meme from '../../assets/images/meme.png'
import "./meme-selection.scss";
import api from '../../utils/api';

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
        const memeSelectionImageStyle = (meme) => {
            return {
                backgroundImage: `url(${meme})`,
                backgroundPosition: "center center",
                backgroundSize: "contain"
            }
        }
        return (
            <div>
                <h4>Popular</h4>
                <div className="meme-selection-container">
                    {this.state.memes.map(meme => (
                        <div className="meme-selection-image" style={memeSelectionImageStyle(meme.url)} >
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default MemeSelection;
