import React from 'react';
import './App.css';
import Button from './components/button/Button';

function App() {

  function click(){
    alert("NO");
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button onButtonClick={click} buttonText={"Hello Sir"} />
      </header>
    </div>
  );
}

export default App;
