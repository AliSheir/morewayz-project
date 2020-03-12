import React, { Component } from 'react';
import './SevenBox.css'
import picz1 from './picz/picz1.jpg';
import picz2 from './picz/picz2.jpg';



export default class SevenBox extends Component {
    render() {
        return (
            <div className="Seven-Box-container">
                <div className="box2">
                    <div className="box3">
<img className='picz' src={picz1} alt=""/>
                    </div>
                    <div className="box3"> <br/>
                    <h1>WEB MASTER</h1> <br/>
<p> Dignissimos asperiores vitae velit </p>
<p> veniam totam fuga molestias </p>
<p> accusamus alias autem</p>
<p> provident. Odit ab aliquam dolor</p>
<p> eius molestias accusamus alias</p>
<p> autem provident. Odit ab aliquam</p>
<p> dolor eius.</p>
<button className='take-course-btn'>TAKE A COURSE</button>

                    </div>
                </div>
                <div className="box2">
                    <div className="box3">
<img className='picz' src={picz2} alt=""/>
                    </div>
                    <div className="box3"> <br/>
                    <h1>WEB MASTER</h1> <br/>
<p> Dignissimos asperiores vitae velit </p>
<p> veniam totam fuga molestias </p>
<p> accusamus alias autem</p>
<p> provident. Odit ab aliquam dolor</p>
<p> eius molestias accusamus alias</p>
<p> autem provident. Odit ab aliquam</p>
<p> dolor eius.</p>
<button className='take-course-btn'>TAKE A COURSE</button>

                    </div>
                </div>
            </div>
        )
    }
}