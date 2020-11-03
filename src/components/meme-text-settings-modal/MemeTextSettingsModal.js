import React from 'react'
import "./meme-text-settings-modal.scss";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import plusCircleIcon from '../../assets/icons/plus-circle.svg';
import { ChromePicker, SketchPicker } from 'react-color';
import dropDownIcon from "../../assets/icons/caret-down-solid.svg";

class MemeTextSettingsModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memeTextSettings: {
                color: "#000000",
                fontFamily: "Impact"
            },
            showColorPicker: false
        }
    }

    onColorChange = (color) => {
        let memeTextSettings = { ...this.state.memeTextSettings };
        memeTextSettings.color = color.hex;
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

    sketchColorPickerStyle = () => {
        return this.state.showColorPicker ? { display: "block" } : { display: "none" };
    }

    toggleSketchColorPicker = () => {
        return this.setState((prevState) => ({
            showColorPicker: !prevState.showColorPicker
        }))
    }

    render() {
        return (
            <Modal showModal={this.props.showModal} onClose={this.onClose}>
                <div className="meme-text-settings-modal">
                    <div className="field">
                        <label className="label" htmlFor="hex-color">Color</label>
                        <div>
                            <div className="color-dropdown" onClick={this.toggleSketchColorPicker}>
                                <div className="color-block" style={{ backgroundColor: this.state.memeTextSettings.color }}></div>
                                <div className="form-controls" >
                                    <div className="form-controls__settings">
                                        <img className="icon mr-0" alt="icon" src={dropDownIcon}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="sketch-picker-wrapper" style={this.sketchColorPickerStyle()}>
                                <SketchPicker onChangeComplete={this.onColorChange} color={this.state.memeTextSettings.color} />
                            </div>
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
                    
                </div>
                <div className="save-settings-button-wrapper">
                        <Button buttonText="Save Settings" className="save-settings-button" onButtonClick={this.getMemeTextSettings} buttonIcon={plusCircleIcon} />
                    </div>
            </Modal>
        )
    }
}

export default MemeTextSettingsModal
