import React from 'react'
import "./meme-text-settings-modal.scss";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import plusCircleIcon from '../../assets/icons/plus-circle.svg';

class MemeTextSettingsModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memeTextSettings: {
                color: "#000000",
                fontFamily: "Impact"
            }
        }
    }

    onColorHexInput = (e) => {
        let memeTextSettings = { ...this.state.memeTextSettings };
        memeTextSettings.color = e.target.value;
        this.setState({ memeTextSettings });
    };

    handleFontChange = (e) => {
        let memeTextSettings = { ...this.state.memeTextSettings };
        memeTextSettings.fontFamily = e.target.value;
        this.setState({ memeTextSettings });
    }

    getMemeTextSettings = () => {
        this.props.getMemeSettings(this.state.memeTextSettings);
    }

    onClose = () => {
        this.props.onClose();
    }

    render() {
        return (
            <Modal showModal={this.props.showModal} onClose={this.onClose}>
                <div className="field">
                    <label className="label" htmlFor="hex-color">Color</label>
                    <div className="control">
                        <input className="input" type="text" id="hex-color-input" placeholder="#ffffff" onKeyDown={this.onColorHexInput} />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="font-field">Font</label>
                    <div className="control">
                        <select value={this.state.memeTextSettings.fontFamily} style={{ fontFamily: this.state.memeTextSettings.fontFamily }} onChange={this.handleFontChange} id="fonts" name="font">
                            <option value="Impact" style={{ fontFamily: "Impact" }}>Impact</option>
                            <option value="Comic Sans MS" style={{ fontFamily: "Comic Sans MS" }}>Comic Sans MS</option>
                            <option value="Helvetica" style={{ fontFamily: "Helvetica" }}>Helvetica</option>
                            <option value="Times New Roman" style={{ fontFamily: "Times New Roman" }}>Times New Roman</option>
                            <option value="Times" style={{ fontFamily: "Times" }}>Times</option>
                            <option value="Courier New" style={{ fontFamily: "Courier New" }}>Courier New</option>
                            <option value="Courier" style={{ fontFamily: "Courier" }}>Courier</option>
                            <option value="Verdana" style={{ fontFamily: "Verdana" }}>Verdana</option>
                        </select>
                    </div>
                </div>
                <div className="save-settings-button-wrapper">
                    <Button buttonText="Save Settings" className="save-settings-button" onButtonClick={this.getMemeTextSettings} buttonIcon={plusCircleIcon} />
                </div>
            </Modal>
        )
    }
}

export default MemeTextSettingsModal
