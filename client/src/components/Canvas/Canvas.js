import React, { Component } from "react";
//import Avatar1 from './../img/hombre.svg';
import P5 from 'p5';

let img;

class Canvas extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    };

    Sketch = (p) => {
        p.setup =() =>{
            p.createCanvas(500,500);
            p.background('grey');
            img = p.loadImage('./../img/hombre.svg');
        }
        p.draw = () =>{           
            p.image(img, 0, 0);
            p.ellipse(150, 100, 100, 100);
        }
    }

    Dibujar = (p) => {
        p.draw = () =>{           
            p.ellipse(150, 100, 100, 100);
        }
    }

    componentDidMount(){
        this.myp5 = new P5(this.Sketch, this.myRef.current);
        // let numero = prompt("numero");
        // if(numero == 1){
           // this.myp5 = new P5(this.Dibujar, this.myRef.current);
        //}
    };

    render(){
        return(
            <div ref={this.myRef}>

            </div>
        );
    };
};
export default Canvas;