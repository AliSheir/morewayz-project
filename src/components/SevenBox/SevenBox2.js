import React, { Component } from 'react';
import './SevenBox.css'
import picz3 from './picz/picz3.jpg';
import picz4 from './picz/picz4.jpg';



export default class SevenBox2 extends Component {
    render() {
        return (
            <div className="Seven-Box-container">
                <div className="box2">
                    <div className="box3">
<img className='picz' src={picz3} alt=""/>
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
<img className='picz' src={picz4} alt=""/>
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