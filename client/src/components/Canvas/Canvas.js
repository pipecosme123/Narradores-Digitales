import React, { Component } from "react";
import Hombre from './../../img/hombre1.svg';
import P5 from 'p5';

let img;

class Canvas extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    };

    Sketch = (p) => {
        let x = 0;
        p.setup =() =>{
            p.createCanvas(500,500);
            p.background('grey');
            img = p.loadImage(Hombre);
            //p.image(img,0,0);
            p.loop();
        }
        p.draw = () =>{           
            p.image(img,0,0);
            p.ellipse(150, 100, 100, 100);

            x = x + 0.1;
            if (x >p.width) {
              x = 0;
            };
            p.line(x, 0, x, p.height);
        }
    }
/*
    Dibujar = (p) => {
        p.draw = () =>{           
            p.ellipse(150, 100, 100, 100);
        }
    }
*/
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