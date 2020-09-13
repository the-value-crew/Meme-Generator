import React from 'react'
import "./meme-text-input.scss";
import cog from "../../assets/icons/cog.svg";
import MemeTextSettingsModal from '../meme-text-settings-modal/MemeTextSettingsModal';

class MemeTextInput extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }
    
    
    onEnter = (e) => {
        if (e.key === 'Enter') {
            this.props.onTextInput(e.target.value)
        }
    };

    showModal = (_) => {
        this.setState(state => { return { showModal: !state.showModal } });

    }

    render() {
        return (
            <div>
                <div className="field">
                    <label className="label" htmlFor={this.props.id}>{this.props.labelText}</label>
                    <div className="control">
                        <input className="input" type="text" id={this.props.id} placeholder={this.props.placeholder} onKeyDown={this.onEnter} />
                        <div className="form-controls">
                            <div className="form-controls__settings" onClick={this.showModal}>
                                <img className="icon mr-0" alt="icon" src={cog}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <MemeTextSettingsModal showModal={this.state.showModal} getMemeSettings={this.getMemeSettings} />
            </div>
        );
    }
}

export default MemeTextInput;
