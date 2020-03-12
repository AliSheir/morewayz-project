import  React, {Component} from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import SchoolIcon from '@material-ui/icons/School';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import './Fifth.css';


export default class FifthBox extends Component{
    render(){
        return(
            <div className="Fifth-box-container">
<div className="second-iner-box"></div>
    <div className="second-iner-box">
<span><LanguageIcon  className='icon-font-cls'/> </span>
<h1       className='icon-font-cls'>3297</h1>
<h2 className='color-cls'>Forigen Followers</h2>
    </div>
    <div className="second-iner-box">
        <span> <SchoolIcon  className='icon-font-cls'/> </span>
        <h1       className='icon-font-cls' >3700</h1>
        <h2 className='color-cls'>Student Enrolled</h2>
    </div>
    <div className="second-iner-box">
        <span>
             <EmojiObjectsIcon    className='icon-font-cls'/>
             <h1       className='icon-font-cls'>5034</h1>
             <h2 className='color-cls'>Class Complete</h2>
        </span>
    </div>
    <div className="second-iner-box">
        <span> <PermIdentityIcon      className='icon-font-cls'/> </span>
        <h1       className='icon-font-cls'>1080</h1>
        <h2 className='color-cls'>CrtiFaid Teacher</h2>
        </div>
        <div className="second-iner-box"></div>
    
    </div>
        )
    }
}