import React from 'react';
import './App.css';
import Greet from './Components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Universe"/>
      <Greet name="Planet"/>
      <Greet name="Globe"/>
    </div>
  );
}

export default App;
