import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignUp = () => {

    const [nombre1, setNombre1] = useState('');
    const [nombre2, setNombre2] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setapellido2] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const submitData = () => {
        axios.post('http://localhost:3001/api/insert',{
            nombre1 : nombre1,
            apellido1 : apellido1,
            correo : correo,
            password : password,
        }).then(() => {
            alert("Datos incertados");
        });
    };

    return (
        <div>
            <label>Nombre</label>
            <input type="text" name="nombre" placeholder="Nombre" onChange={(e) => { setNombre1(e.target.value)}}/><br />
            <label>Apellido</label>
            <input type="text" name="Apellido" placeholder="Apellido" onChange={(e) => { setApellido1(e.target.value)}}/><br />
            <label>Correo</label>
            <input type="email" name="Correo" placeholder="Correo" onChange={(e) => { setCorreo(e.target.value)}}/><br />
            <label>Contraseña</label>
            <input type="password" name="Contraseña" placeholder="Contraseña" onChange={(e) => { setPassword(e.target.value)}}/><br />
            <button onClick={submitData}>Submit</button>
        </div>
    );
}

export default SignUp;