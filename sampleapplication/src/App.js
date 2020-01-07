import React from 'react';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Universe" >
        <p>Child props</p>
      </Greet>
      <Greet name="Planet">
        <button>Action</button>
      </Greet>
      <Greet name="Globe" />
      <Welcome name="Universe"/>
      <Welcome name="Planet"/>
      <Welcome name="Globe"/>
    </div>
  );
}

export default App;
