import React from 'react';
import './App.css';
import P5 from './components/Canvas/P5';
import 'materialize-css/dist/css/materialize.min.css';
import Windows from './components/Windows';

function App() {
  return (
    <div className="App">
      <h1>CRUD Aplication</h1>
      <P5></P5>
      <Windows></Windows>
    </div>
  );
}

export default App;
