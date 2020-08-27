import React from 'react'
import "./button.scss";

function Button(props) {
    return (
        <button onClick={props.onButtonClick} className="button">{props.buttonText}</button>
    )
}

export default Button
