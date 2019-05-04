import React, { Component } from 'react'
import './index.scss';
class AboutUs extends Component {
  render() {
    return (
      <div className='about-us-box'>
            <div className='about-in-box'>
                <div className='title-box'>
                    <p className='title'>关于我们</p>
                    <span></span>
                </div>
                <div className='about-us-msg'>
                    <img src={require('./../../assets/image/aboutus.png')} alt=""/>
                    <div className='component-msg'>
                        <p className='component-title'>郑州晨寰网络技术有限公司</p>
                        <span></span>
                        <div className='component-instro'>
                            本公司现主要提供百度，SEO快速排名服务，深度超级推广，全网屏霸服务；宸寰网络服务宗旨即快排名，低收费本公司现主要提供百度，SEO快速排名服务，深度超级推广，全网屏霸服务；宸寰网络服务宗旨即快排名，低收费.
                        </div>
                        <div className='component-info'>
                            <div className='com-address-master-info'>
                                <span>联系人:何经理</span>
                                <span>电话:13588717749</span>
                                <span>邮箱:1239571160@qq.com</span>
                                <span>地址:河南省郑州市上街区90号</span>
                            </div>
                            <div className='com-img'>
                                <img src={require('./../../assets/image/二维码.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
export default AboutUs;