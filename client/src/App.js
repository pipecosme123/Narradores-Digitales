import React from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import Canvas from './components/Canvas/Canvas';
import 'materialize-css/dist/css/materialize.min.css';
import Windows from './components/Windows';


function App() {
  return (
    <div className="App">
      <h1>CRUD Aplication</h1>
      <Windows></Windows>
      <Canvas></Canvas>
    </div>
  );
}

export default App;
