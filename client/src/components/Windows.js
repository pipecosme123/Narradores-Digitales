import React, { Component } from 'react';
import M from 'materialize-css';
import './../css/Windows.css';
import {Avatar} from '../Constants/Avatar'

class Windows extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
        var av = document.getElementById
    }

    render() {
        const person;
        return (
            <div>
                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>

                        <div className="container">
                            <div className="row center">

                                {Avatar.map(personaje => (
                                    <div key={personaje.name}>
                                        <a id={`${personaje.name}`}>
                                            <div className="card card-avatar grey lighten-5 col s4 hoverable">
                                                <img src={personaje.img} width="150" height="150"/>
                                                <p>{personaje.name}</p>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer center">
                        <a className="modal-close waves-effect waves-green btn-flat">Cancelar</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Windows;
