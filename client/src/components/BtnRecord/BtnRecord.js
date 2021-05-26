//import HME from 'h264-mp4-encoder';
import { Component } from 'react';
import Canvas from './../Canvas/Canvas';


const HME = require("h264-mp4-encoder");

let encoder 
const frate = 30 // frame rate
const numFrames = 10; // num of frames to record
let recording = true;
let recordedFrames = 0;


// make sure encoder is ready before use
function preload({ cwidth, cheight }) {
    HME.createH264MP4Encoder().then(encoder => {
       
        encoder.outputFilename = 'test'
        encoder.width = cwidth
        encoder.height = cheight
        encoder.frameRate = frate
        encoder.kbps = 50000 // video quality
        encoder.groupOfPictures = 10 // lower if you have fast actions.
        encoder.initialize()
    })
};


let  rec = (recording) => {
       
    // keep adding new frame
       console.log("enterToRecord");
       if (recording) {
        console.log('recording')
        encoder.addFrameRgba(document.getElementById("defaultCanvas0").getImageData(0, 0, encoder.width * encoder.height).data);
        //encoder.addFrameRgba(HME.drawingContext.getImageData(0, 0, encoder.width, encoder.height).data);
        recordedFrames++
    }
    // finalize encoding and export as mp4
    if (recordedFrames === numFrames) {
        recording = false
        recordedFrames = 0
        console.log('recording stopped')

        encoder.finalize()
        const uint8Array = encoder.FS.readFile(encoder.outputFilename);
        const anchor = document.createElement('a')
        anchor.href = URL.createObjectURL(new Blob([uint8Array], { type: 'video/mp4' }))
        anchor.download = encoder.outputFilename
        anchor.click()
        encoder.delete()
        preload() // reinitialize encoder
    }
};

class BtnRecord extends Component {
    constructor(recording, recordedFrames) {
        super();
        this.state = {
            recording: false
        }
    };
    hadleUpdateClik = () => {
        console.log("Is Recording")
        /*
        this.setState({
            recording: true,
        });
        */
        
        recording=true;
        rec(recording);   
    };

    render() {
        return (
            <div>
                <div>
                <button onClick={this.hadleUpdateClik}>Record</button>
                </div>
            </div>
        );
    };
};

export default BtnRecord;