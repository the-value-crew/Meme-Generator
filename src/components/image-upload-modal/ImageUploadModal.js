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

    getAppropriateFormat = (imageObj, callback) => {
        let name = imageObj.name;
        let url = URL.createObjectURL(imageObj);
        let width = 2, height;
        let img = new Image();
        img.src = url;
        img.onload = function () {
            console.log(this.width);
            console.log(url);
            width = this.width;
            height = this.height;
            console.log(width);

            if (callback) callback({ name, url, width, height })
        }
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let uploadImage = event.target.files[0];
            let self = this;
            this.getAppropriateFormat(uploadImage, function (imageObject) {
                self.setState({
                    image: imageObject
                });
            });
        }
    };

    clearImageUpload = _ => {
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
