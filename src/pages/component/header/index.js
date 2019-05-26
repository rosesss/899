import React, { Component } from 'react';
import './index.scss';
class Header extends Component {
    render() {
        return (
            <div className='header-box'>
                <div className='in-box'>
                    <div className='company-msg'>
                        <img src={require('./../../../assets/image/logo.png')} alt="" />
                        <div className='msg-box'>
                            <div className="name">
                                <img src={require('./../../../assets/image/宸寰网络.png')} alt="" />
                            </div>
                            <div className="inter">
                                <img src={require('./../../../assets/image/英文字体.png')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='contact'>
                        <div>
                            <span>登录</span>
                            <span>注册</span>
                        </div>
                        <p>合作热线：156-3990-1688</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Header;