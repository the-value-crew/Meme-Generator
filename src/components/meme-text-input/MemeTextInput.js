import React from 'react'
import "./meme-text-input.scss";
import cog from "../../assets/icons/cog.svg";
import MemeTextSettingsModal from '../meme-text-settings-modal/MemeTextSettingsModal';

class MemeTextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            textData: {
                text: "",
                settings: {
                    color: "#000000",
                    fontFamily: "Impact"
                }
            }
        }
    }

    onEnter = async (e) => {
        if (e.key === 'Enter') {
            let textData = { ...this.state.textData };
            textData.text = e.target.value;
            e.target.value = " ";
            await this.setState({ textData });
            this.props.onTextInput(this.state.textData);
        }
    };

    showModal = (_) => this.setState({ showModal: true });
    

    getMemeSettings = (settings) => {
        this.onClose();
        this.setState(prevState => ({
            textData: {
                ...prevState.textData,
                settings: {
                    ...settings
                }
            }
        }))
    }

    onClose = () => this.setState({ showModal: false });

    render() {
        return (
            <div>
                <div className="field">
                    <label className="label" htmlFor={this.props.id}>{this.props.labelText}</label>
                    <div className="control">
                        <input className="input" type="text" id={this.props.id} placeholder={this.props.placeholder} onKeyDown={this.onEnter} />
                        <div className="form-controls" onClick={this.showModal}>
                            <div className="form-controls__settings">
                                <img className="icon mr-0" alt="icon" src={cog}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <MemeTextSettingsModal showModal={this.state.showModal} getMemeSettings={this.getMemeSettings} onClose={this.onClose} />
            </div>
        );
    }
}

export default MemeTextInput;
