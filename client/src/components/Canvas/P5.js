import Sketch from "react-p5";

let x = 50;
let y = 50;
let img;

export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(500, 500).parent(canvasParentRef);
        img = p5.createImg(
            'https://p5js.org/assets/img/asterisk-01.png',
            'the p5 magenta asterisk'
          );
	};

	const draw = (p5) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
        img.position(-10, -10);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		x++;
	};

	return <Sketch setup={setup} draw={draw} />;
};

/*
cont P5 = () => {

}
const s = (sketch) =>{
    let x = 100;
    let y = 100;

    sketch.setup = () => {
        sketch.createCanvas(50,50);
    };
    sketch.draw = () =>{
        sketch.background(0);
        sketch.fill(255);
        sketch.rect(x,y,50,50);
    };
};
let myp5 = new P5(s);*/