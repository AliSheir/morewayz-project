import React, { Component } from 'react';
import "./Header.css";
import 'antd/dist/antd.css';
import NavBar from './Nav.js'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="top-container">

                    <div className="left-box">
                        www.google.com
                    </div>
                    <div className="write-box">
                        <div className="box">
Cell : +123456789
                        </div>
                        <div className="box">
<FacebookIcon  />
<TwitterIcon />
<LanguageIcon />
<GitHubIcon   />
                        </div>
                    </div>
                </div> 
                <div className='nav'>
                <NavBar />
                    </div> 
            </div>
        )
    }
}