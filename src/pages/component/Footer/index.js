import React, { Component } from 'react'
import './index.scss';
class Footer extends Component {
  render() {
    return (
      <div className='footer'>
          <div className='in-box'>
              <div className='footer-box'>
                <div className='company-instro'>
                    <div className='title-box'>
                        <p>宸寰网络</p>
                        <span></span>
                    </div>
                    <div className='detail-box'>
                        本公司现主要提供百度，SEO快速排名服务，深度超级推广，全网屏霸服务；宸寰网络服务宗旨即快排名，低收费
                    </div>
                </div>

                <div className='toast-box'>
                  <div className='title-box'>
                      <p>友情提示</p>
                      <span></span>
                  </div>
                  <div className='detail-box'>
                      <div>不接受违法，色情，灰色词汇等，如客户自助提交，发现后即刻停止优化，账户余额一律不退。</div>
                      <div>如果对于关键词排名抓取方式和抓取规则有异议，请勿使用此系统提交关键词。</div> 
                      <div>SEO排名波动属于正常情况，排名下降也正常，对于提交的关键词，只能接受排名上升，不能接受排名下降的，请勿提交</div>
                  </div>
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
                        联系人：贺经理
                    </p>
                    <p className='contact-call'>电话:156-3990-1688</p>

                    <img src={require('./../../../assets/image/二维码.png')} alt=""/>
                </div>
              </div>
          </div>
      </div>
    )
  }
}
export default Footer;
