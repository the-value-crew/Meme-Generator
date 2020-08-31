import React from 'react'
import "./meme-text-input.scss";

function MemeTextInput(props) {
    return (
        <div class="field">
            <label class="label" for={props.id}>{props.labelText}</label>
            <div class="control">
                <input class="input" type="text" id={props.id} placeholder={props.placeholder} value={props.value} />
            </div>
        </div>
    );
}

export default MemeTextInput;
