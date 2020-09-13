import React from 'react';
import "./modal.scss";

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        }
    }

    toggleModal = () => {
        this.setState(state => { return { showModal: !state.showModal } })
    }

    getAppropriateStyle = (showModal) => {
        return showModal ? { display: "block" } : { display: "none" };
    }

    render() {
        return (
            <div id="modal" className="modal" style={this.getAppropriateStyle(this.state.showModal)}>
                <div className="modal-content">
                    <span className="close" onClick={this.toggleModal}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        )
    }
}

export default Modal;
