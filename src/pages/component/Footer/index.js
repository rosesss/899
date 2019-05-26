import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';
import './index.scss';
import { Link } from 'react-router-dom';

@inject('stores')
@observer
class Footer extends Component {
  
  constructor(props) {
      super(props);
      this.state = {

      }
  }
  
    @computed get homeStore() {
        return this.props.stores.homeStore;
    }

  componentDidMount() {
      this.getCompanyInfo()
      this.getLinkAll()
  }

    async getCompanyInfo() {
      try {
          await this.homeStore.getCompanyInfo();
      } catch (error) {
          console.log(error)
      }
  }

  async getLinkAll() {
      try {
          await this.homeStore.getLinkAll()
      } catch (error) {
          console.log(error)
      }
  }

    gotoUrl(url) {
        console.log(window)
        window.open(`http://${url}`, "_blank")
    }
  
  
  render() {
      const linkAll = this.homeStore.linkAll;
      const compantInfo = this.homeStore.compantInfo;
    return (
      <div className='footer'>
          <div className='in-box'>
              <div className='footer-box'>
                <div className='company-instro'>
                    <div className='title-box'>
                        <p>宸寰网络</p>
                        <span></span>
                    </div>
                    <div className="detail-box" dangerouslySetInnerHTML={{ __html:compantInfo.shortDescribe}}></div>
                </div>

                <div className='toast-box'>
                  <div className='title-box'>
                      <p>友情提示</p>
                      <span></span>
                  </div>
                <div className="detail-box" dangerouslySetInnerHTML={{ __html: compantInfo.notice }}></div>
                </div>

                <div className='seo-init'>
                    <div className='title-box'>
                      <p>快排SEO</p>
                      <span></span>
                    </div>
                    <div className='detail-box'>
                        <div className='init-btn'>点击进入</div>
                    </div>
                </div>


                <div className='deep-init'>
                  <div className='title-box'>
                    <p>深度推广霸屏</p>
                    <span></span>
                  </div>
                  <div className='detail-box'>
                    <div className='init-btn'>点击进入</div>
                  </div>
                </div>


                <div className='contact-box'>
                    <div className='title-box'>
                        <p>联系我们</p>
                        <span></span>
                    </div>
                    <p className='contact-people'>
                            联系人：{compantInfo.contacts}
                    </p>
                    <p className='contact-call'>电话:{compantInfo.phoneNumber}</p>
                    <img src={`http://seoapi.chamhuan.com/${compantInfo.wxQrCode}`} alt=""/>
                </div>
              </div>

              
          </div>
            <div className='link-box'>
                <div className='in-box'>
                    <p>友情链接:</p>
                    <div className='link'>
                        {
                            linkAll.length > 0 ? linkAll.map((item, index) => {
                                return (
                                    <div key={index} onClick={() => this.gotoUrl(item.linkUrl)}>
                                        {item.linkName}
                                    </div>
                                )
                            })
                            :''
                        }

                    </div>
                </div>
                
            </div>
      </div>
    )
  }
}
export default Footer;
