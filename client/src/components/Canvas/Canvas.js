import React, { Component } from "react";
import P5 from 'p5';

class Canvas extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    };

    Sketch = (p) => {
        p.setup =() =>{
            p.createCanvas(500,500);
        }
        p.draw = () =>{
            p.background('grey');
            p.ellipse(150, 100, 100, 100);
        }
    }

    componentDidMount(){
        this.myp5 = new P5(this.Sketch, this.myRef.current)
    };

    render(){
        return(
            <div ref={this.myRef}>

            </div>
        );
    };
};
export default Canvas;