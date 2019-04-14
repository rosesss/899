import React, { Component } from 'react';
import './index.scss';
class Header extends Component {
    render() {
        return (
            <div className='header-box'>
                <div className='in-box'>
                    <div className='company-msg'>
                        <img src={require('./../../../assets/image/5.jpg')} alt="" />
                        <div className='msg-box'>
                            <p className='name'>晨寰网络</p>
                            <p className='inter'>Chenhuan Network</p>
                        </div>
                    </div>
                    <div className='contact'>
                        <div>
                            <span>登录</span>|<span>注册</span>
                        </div>
                        <p>合作热线：156-3990-1688</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Header;