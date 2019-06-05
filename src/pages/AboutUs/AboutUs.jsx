import React, { Component } from 'react'
import './index.scss';
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';

@inject('stores')
@observer
class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    @computed get homeStore() {
        return this.props.stores.homeStore;
    }

    async componentDidMount() {
        try {
            await this.homeStore.aboutUs(1)
        } catch (error) {
            console.log(error)
        }
    }
    
  render() {
      const compantInfo = this.homeStore.compantInfo;
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
                        <p className='component-title'>{compantInfo.companyName}</p>
                        <span></span>
                        <div className='component-instro' dangerouslySetInnerHTML={{ __html: compantInfo.shortDescribe}}>
                        </div>
                        <div className='component-info'>
                            <div className='com-address-master-info'>
                                <span>联系人:{compantInfo.contacts}</span>
                                <span>电话:{compantInfo.phoneNumber}</span>
                                <span>邮箱:{compantInfo.email}</span>
                                <span>地址:{compantInfo.address}</span>
                            </div>
                            <div className='com-img'>
                                <img src={`http://seoapi.chamhuan.com/${compantInfo.wxQrCode}`} alt=""/>
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