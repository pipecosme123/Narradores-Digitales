import React, { Component } from "react";

class Canvas extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    };

    Sketch = (p) => {
        p.setup =() =>{

        }
        p.draw = () =>{

        }
    }

    componentDidMount(){
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    };

    render(){
        return(
            <div ref={this.myRef}>
                
            </div>
        );
    }



}