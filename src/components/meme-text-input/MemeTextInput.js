import React from 'react'
import "./meme-text-input.scss";
import cog from "../../assets/icons/cog.svg";

function MemeTextInput(props) {
    return (
        <div class="field">
            <label class="label" for={props.id}>{props.labelText}</label>
            <div class="control">
                <input class="input" type="text" id={props.id} placeholder={props.placeholder} />
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
