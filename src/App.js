import React from 'react';
import './App.scss';
import Button from './components/button/Button';
import meme from './meme.png';
import plusCircleIcon from './assets/icons/plus-circle.svg';
import MemeTextInput from './components/meme-text-input/MemeTextInput';

function App() {

  function click() {
    alert("NO");
  }
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>
            <span class="underline-text">MEME
                <div class="title-underline"></div></span> Generator
          </h1>
        </header>
        <section className="meme-generator-section">
          <div className="meme-grid">
            <div className="col">
              <img src={meme} alt="Meme Create" />
            </div>
            <div className="col">
              <div className="button-group">
                <Button buttonText="Add Your Own Image" buttonIcon={plusCircleIcon} />
                <Button buttonText="Add Image to Your Meme" />
              </div>
              <div>
                <div className="meme-text-input">
                  <MemeTextInput label={"text"} id={"memeText"} labelText={"Text"} placeholder={"Text"} />
                </div>
              </div>
              <div className="button-group create-meme-button-group">
                <Button buttonText="Reset" buttonIcon={plusCircleIcon} />
                <Button buttonText="Generate Meme" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
