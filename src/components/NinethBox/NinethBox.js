import React, {Component} from 'react';
import './NinethBox.css';
import img1 from '../SevenBox/picz/picz1.jpg';



export default class NinethBox extends Component{
render(){
    return(
        <div className="Nine-box-container">
<div className="iner-box">
    <img className='img-img' src={img1} alt=""/>
    <h2>Healthy lifeStyie & Living</h2>
    <div className="dateted-box">
    <span>MARCH.15 </span>
    <span>21</span>
    </div>
    <div>
    Far far away, behind the word mountains, far  <br/>
   from the countries Vokalia and Consonantia, <br/>
   there live the blind texts.
   </div>
</div>
<div className="iner-box">
<img className='img-img' src={img1} alt=""/>
    <h2>Healthy lifeStyie & Living</h2>
    <div className="dateted-box">
    <span>MARCH.15 </span>
    <span>21</span>
    </div>
    <div>
    Far far away, behind the word mountains, far  <br/>
   from the countries Vokalia and Consonantia, <br/>
   there live the blind texts.
   </div>
</div>
<div className="iner-box">
<img className='img-img' src={img1} alt=""/>
    <h2>Healthy lifeStyie & Living</h2>
    <div className="dateted-box">
    <span>MARCH.15 </span>
    <span>21</span>
    </div>
    <div>
    Far far away, behind the word mountains, far  <br/>
   from the countries Vokalia and Consonantia, <br/>
   there live the blind texts.
   </div>
</div>
        </div>
    )
}
}