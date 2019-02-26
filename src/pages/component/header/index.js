import React, { Component } from 'react';
import './index.scss';
class Header extends Component {
    render() {
        return (
            <div className='header-box'>
                <div className='company-msg'>
                    <img src={require('./../../../assets/image/5.jpg')} alt=""/>
                    <div className='msg-box'>
                        <p className='name'>bajiujiu</p>
                        <p className='inter'>1234567.com</p>
                    </div>
                </div>
                <div className='contact'>
                    合作热线:12121212121
                </div>
            </div>
        );
    }
}

export default Header;