import React, { Component } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LanguageIcon from '@material-ui/icons/Language';
import './ForthBox.css'




export default class ForthBox extends Component {
    render() {
        return (
            <div className="Forth-box-container">
                <div className="box1">
<div className="iconBox">
<StorefrontIcon  className='font-sizer'/>
</div>
<h1>Business</h1>
<p> Dignissimos asperiores vitae velit</p>
<p> veniam totam fuga molestias</p>
<p> accusamus alias autem provident.</p>
<p> Odit ab aliquam dolor eius.</p>
                </div>
                <div className="box1">
<div className="iconBox">
    <FavoriteBorderIcon className='font-sizer' />
</div>
<h1>Business</h1>
<p> Dignissimos asperiores vitae velit</p>
<p> veniam totam fuga molestias</p>
<p> accusamus alias autem provident.</p>
<p> Odit ab aliquam dolor eius.</p>

                </div>
                <div className="box1">
                <div className="iconBox">
    <ChatBubbleOutlineIcon className='font-sizer' />
    </div>
    <h1>Business</h1>
<p> Dignissimos asperiores vitae velit</p>
<p> veniam totam fuga molestias</p>
<p> accusamus alias autem provident.</p>
<p> Odit ab aliquam dolor eius.</p>

                </div>
                <div className="box1">
                <div className="iconBox">
    <LanguageIcon className='font-sizer'/>
    </div>
    <h1>Business</h1>
<p> Dignissimos asperiores vitae velit</p>
<p> veniam totam fuga molestias</p>
<p> accusamus alias autem provident.</p>
<p> Odit ab aliquam dolor eius.</p>

                </div>
            </div>
        )
    }
}