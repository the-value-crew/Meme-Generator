import React from 'react'
import "./meme-text-input.scss";
import cog from "../../assets/icons/cog.svg";

function MemeTextInput(props) {
    return (
        <div className="field">
            <label className="label" htmlFor={props.id}>{props.labelText}</label>
            <div className="control">
                <input className="input" type="text" id={props.id} placeholder={props.placeholder} />
                <div className="form-controls">
                    <div className="form-controls__colors">
                        <div className="color"></div>
                    </div>
                    <div className="form-controls__settings">
                        <img className="icon" alt="icon" src={cog}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemeTextInput;
