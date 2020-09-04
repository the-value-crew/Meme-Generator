import React from 'react';
import './App.scss';
import Button from './components/button/Button';
import meme from './assets/images/meme.png';
import plusCircleIcon from './assets/icons/plus-circle.svg';
import undoIcon from './assets/icons/undo-alt.svg';

import MemeTextInput from './components/meme-text-input/MemeTextInput';
import Header from './components/header/Header';
import MemeSelection from './components/meme-selection/MemeSelection';
import "./sass/all.scss";
import axios from "axios";
import api from "./utils/api";
import MemeImage from "./components/meme-image/MemeImage";

function App() {

  function click() {
    alert("NO");
  }
  return (
    <div className="App">
      <div className="container">
        <Header />
        <section className="meme-generator-section">
          <div className="meme-grid">
            <div className="col meme-col">
              <MemeImage meme={meme} />
            </div>
            <div className="col meme-creator-col">
              <div className="button-group">
                <Button buttonText="Add Your Own Image" buttonIcon={plusCircleIcon} />
                <Button buttonText="Add Image to Your Meme" buttonIcon={plusCircleIcon} />
              </div>
              <div>
                <MemeSelection memes={api.getAllMemes(axios)} />
              </div>
              <div>
                <div className="meme-text-input">
                  <MemeTextInput label={"text"} id={"memeText"} labelText={"Text"} placeholder={"Text"} />
                </div>
              </div>
              <div className="button-group create-meme-button-group">
                <div className="reset-button-container">
                  <Button buttonText="Reset" classes={"--black"} buttonIcon={undoIcon} />
                </div>
                <Button buttonText="Generate Meme" buttonIcon={plusCircleIcon} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
