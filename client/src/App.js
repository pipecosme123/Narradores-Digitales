import React from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import Canvas from './components/Canvas/Canvas';
import 'materialize-css/dist/css/materialize.min.css';
import Windows from './components/Windows';
import BtnRecord from './components/BtnRecord/BtnRecord'


function App() {
  return (
    <div className="App">
      <h1>CRUD Aplication</h1>
      <Windows></Windows>
      <Canvas></Canvas>
      <BtnRecord cheight ="500" cwidth="500"/>
    </div>
  );
}

export default App;
