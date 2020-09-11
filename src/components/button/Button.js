import React from 'react'
import "./button.scss";

function Button(props) {

    const onButtonClick = (e) => {
    
    }

    return (
        <button onClick={onButtonClick} className={`button ${props.classes}`}> { props.buttonIcon ? <img className="icon" alt="icon" src={props.buttonIcon}></img> : ''}
            {props.buttonText}
        </button>
    )
}

export default Button
