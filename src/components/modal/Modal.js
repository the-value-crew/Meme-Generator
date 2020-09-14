import React from 'react';
import "./modal.scss";

class Modal extends React.Component {

    onClose = () => {
        this.props.onClose();
    }

    getAppropriateStyle = (showModal) => {
        return showModal ? { display: "block" } : { display: "none" };
    }

    render() {
        return (
            <div id="modal" className="modal" style={this.getAppropriateStyle(this.props.showModal)}>
                <div className="modal-content">
                    <span className="close" onClick={this.onClose}>&times;</span>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
