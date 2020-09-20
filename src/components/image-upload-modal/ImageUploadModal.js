import React from 'react'
import Button from '../button/Button';
import Modal from "../modal/Modal";
import plusCircleIcon from '../../assets/icons/plus-circle.svg';


class MemeTextSettingsModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
        this.imageUpload = React.createRef();
    }

    onClose = () => {
        this.props.onClose();
    }


    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let uploadImage = event.target.files[0];
            this.setState({
                image: uploadImage
            });
        }
    };

    clearImageUpload = _ =>{
        this.imageUpload.current.value = '';
    }

    addImage = _ => {
        this.props.image(this.state.image);
        this.props.onClose();
        this.clearImageUpload();
    }


    render() {
        return (
            <Modal showModal={this.props.showModal} onClose={this.onClose}>
                <input type="file" name="myImage" ref={this.imageUpload} onChange={this.onImageChange} />
                <div className="save-settings-button-wrapper">
                    <Button buttonText="Add Image" buttonIcon={plusCircleIcon} onButtonClick={this.addImage} />
                </div>
            </Modal>
        )
    }
}

export default MemeTextSettingsModal
