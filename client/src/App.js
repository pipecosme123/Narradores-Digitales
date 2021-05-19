import React from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import 'materialize-css/dist/css/materialize.min.css';
import Windows from './components/Windows';

function App() {
  return (
    <div className="App">
      <h1>CRUD Aplication</h1>
      <SignUp></SignUp>
      <Windows></Windows>
    </div>
  );
}

export default App;
