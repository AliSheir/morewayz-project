import React, {Component} from 'react';
import './ElevenBox.css';




export default class ElevenBox extends Component{
render(){
    
    return(
        <div className="Eleven-box-container">
            <div className='boxzz'>
<h1 className='a'>Get 400 of Online Courses for Free</h1>
<h3 className='a'>By Mike Smith</h3>
</div>
<div className="cricle-box">
<div className="cricle">
        <span>333</span>
        <span>Days</span>
    </div>
    <div className="cricle">
        <span>8</span>
        <span>Hours</span> 
    </div> <br/>
    <div className="cricle">
        <span>37</span>
        <span>Minuts</span>
    </div>
    <div className="cricle">
    <span>9</span>
    <span>Seconds</span>
    </div>
</div>
<div>
<h3  className='a'>Limited Offers, Hurry Up</h3>
<button className='rejister-btn'>Register Now !</button>
</div>
        </div>
    )
}
}