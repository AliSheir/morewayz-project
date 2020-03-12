import React, { Component } from 'react';
import './TwelvBox.css'
import imgz1 from './imgz/project-1.jpg'
import imgz2 from './imgz/project-2.jpg'
import imgz3 from './imgz/project-3.jpg'
import imgz4 from './imgz/project-4.jpg'



export default class TwelvBox extends Component {
    render() {
        return (
            <div className="TwelvBox-container">
                <div className="iner-box1">

                    <div className="ist-box">
                        INSTAGRAM GALLERY
    </div>
                </div>
<div className="imgezz-container-box">
<div className="img-boxx">
                    <img className='imgz' src={imgz1} alt="" />
                </div>
                <div className="img-boxx">
                    <img className='imgz' src={imgz2} alt="" />
                </div>
                <div className="img-boxx">
                    <img className='imgz' src={imgz3} alt="" />
                </div>
                <div className="img-boxx">
                    <img className='imgz' src={imgz4} alt="" />
                </div>

</div>
            </div>
        )
    }
}