import React, { Component } from 'react';
import "./Header.css";
import 'antd/dist/antd.css';

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
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}