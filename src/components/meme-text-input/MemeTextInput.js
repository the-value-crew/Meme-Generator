import React from 'react'
import "./meme-text-input.scss";
import cog from "../../assets/icons/cog.svg";
import MemeTextSettingsModal from '../meme-text-settings-modal/MemeTextSettingsModal';
import Modal from '../modal/Modal';

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
        this.setState({showModal: true});
        console.log("From meme text input");
        console.log(this.state.showModal);
    }

    getMemeSettings = (settings) =>{
        this.onClose();
        console.log(settings);
    }

    onClose = () => {
        this.setState({showModal: false});
    }


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
