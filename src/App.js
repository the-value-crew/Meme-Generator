import React, { Component } from 'react';
import './App.scss';
import Button from './components/button/Button';
import plusCircleIcon from './assets/icons/plus-circle.svg';
import undoIcon from './assets/icons/undo-alt.svg';

import MemeTextInput from './components/meme-text-input/MemeTextInput';
import Header from './components/header/Header';
import MemeSelection from './components/meme-selection/MemeSelection';
import "./sass/all.scss";
import axios from "axios";
import api from "./utils/api";
import MemeImage from "./components/meme-image/MemeImage";
import ImageUploadModal from "./components/image-upload-modal/ImageUploadModal";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMeme: null,
      textData: {
        text: "",
        settings: {
          color: "#000000",
          fontFamily: "Impact"
        }
      },
      downloadMeme: false,
      resetCanvas: false,
      showImageUploadModal: true,
      memeBackgroundImage: null
    }
  }

  onMemeSelection = (meme) => {
    this.setState({ currentMeme: meme });
  }

  onTextInput = (memeTextObj) => {
    this.setState({ textData: memeTextObj });
  }

  getMemeSettings = (value) => {
    console.log(value);
  }

  downloadMeme = () => {
    this.setState({ downloadMeme: true });
  }

  onImageDownloaded = (value) => {
    this.setState({ downloadMeme: false });
  }

  onMemeTextClear = () => {
    let textData = { ...this.state.textData };
    textData.text = "";
    this.setState({ textData });
  }

  resetCanvas = () => {
    this.setState({ resetCanvas: true });
  }

  onCanvasReset = () =>{
    this.onMemeTextClear();
    this.setState({resetCanvas: false});
  }

  onShowImageModalClose = () => {
    this.setState({showImageUploadModal: false});
  }

  addYourOwnImage = () => {
    this.setState({showImageUploadModal: true});
  }


  render() {

    return (
      <div className="App">
        <div className="container">
          <Header />
          <section className="meme-generator-section">
            <div className="meme-grid">
              <div className="col meme-col">
                <MemeImage memeBackgroundImage={this.state.currentMeme} memeTextObject={this.state.textData} downloadCanvas={this.state.downloadMeme}
                  onImageDownloaded={this.onImageDownloaded} onMemeTextClear={this.onMemeTextClear} resetCanvas={this.state.resetCanvas} onCanvasReset={this.onCanvasReset} 
                  />
              </div>
              <div className="col meme-creator-col">
                <div className="button-group">
                  <Button buttonText="Add Your Own Image" buttonIcon={plusCircleIcon} onButtonClick={this.addYourOwnImage} />
                  <Button buttonText="Add Image to Your Meme" buttonIcon={plusCircleIcon} />
                </div>
                <div>
                  <MemeSelection memes={api.getAllMemes(axios)} onMemeSelection={this.onMemeSelection} />
                </div>
                <div>
                  <div className="meme-text-input">
                    <MemeTextInput label={"text"} id={"memeText"} labelText={"Text"} placeholder={"Text"} onTextInput={this.onTextInput} />
                  </div>
                </div>
                <div className="button-group create-meme-button-group">
                  <div className="reset-button-container">
                    <Button buttonText="Reset" classes={"--black"} buttonIcon={undoIcon} onButtonClick={this.resetCanvas} />
                  </div>
                  <Button buttonText="Generate Meme" buttonIcon={plusCircleIcon} onButtonClick={this.downloadMeme} />
                </div>
              </div>
            </div>
          </section>
        </div>
        <ImageUploadModal showModal={this.state.showImageUploadModal} onClose={this.onShowImageModalClose} image={this.onMemeSelection}/>
      </div>
    );
  }
}