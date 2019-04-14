import React, { Component } from 'react'
import { Button } from 'antd';
import './index.scss';
import img1 from './../../assets/image/火箭.png';
import img2 from './../../assets/image/电脑.png';
import img3 from './../../assets/image/钱币.png';
import img4 from './../../assets/image/钱包.png';
import img5 from './../../assets/image/靶子.png';
import img6 from './../../assets/image/手机.png'
class SeoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advantageList: [
        {
          title: '3-15天上首页',
          img: img1
        },
        {
          title: '无需修改网站',
          img: img2
        },
        {
          title: '价格低至12/天',
          img: img3
        },
        {
          title: '扣费清晰可查',
          img: img4
        },
        {
          title: '关键词按天付费',
          img: img5
        },
        {
          title: '不限关键词类型',
          img: img6
        },
      ]
    }
  }

  render() {
    return (
      <div className='seo-box'>
        <div className='in-boxs'>
          <div className='chose-seo-reason'>
            <div className='title-box'>
              <p className='title'>快排SEO</p>
              <span></span>
            </div>
            <div className='chose-box'>
              <img src={require('./../../assets/image/fastseo.png')} alt="" />
              <div className='chose-reason'>
                <p className='chose-title'>为什么选择快排SEO</p>
                <div className='reason'>
                  <p>不排首页 不扣费用户</p>
                  <p>一天见效  全网最底价</p>
                </div>
                <div className='login-register'>
                  <Button type="primary" >登录</Button>
                  <Button className='register-btn'>注册</Button>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className='advantage-box'>
          <div className='in-box'>
            <div className='title-box'>
              <p className='title'>我们的优势</p>
              <span></span>
            </div>

            <div className='advantage-list-box'>
              {
                this.state.advantageList.map((item, index) => {
                  return (
                    <div key={index} className='advantage-item'>
                      <img src={item.img} alt="" />
                      <p>{item.title}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className='common-problems-box'>
          <div className='in-box'>
            <div className='title-box'>
              <p className='title'>常见问题</p>
              <span></span>
            </div>
            <div className='problems-list-box'>


              {
                [1, 2, 3, 4, 5, 6].map((item, index) => {
                  return (
                    <div className='problem-item'>
                      <p>优化有限制吗</p>
                      <div>
                        目前只针对排名前100名的词，且只针对百度PC/移动端，不做非法、灰色词汇
                  </div>
                      <img src={require('./../../assets/image/problem.png')} alt="" />
                    </div>

                  )
                })
              }

            </div>
          </div>
        </div>


        <div className='cooperation-box'>
          <div className='in-box'>
            <div style={{width:'1200px',margin:'0 auto'}}>
              <div className='title-box'>
                <p className='title'>特别合作说明</p>
                <span></span>
              </div>
              <div className='cooperation-list'>
                {
                  [1,2,3].map((item,index) => {
                    return(
                      <div className='cooperation-item' key={index}>
                        <div className='cooperation-title'>
                          客户直接查询与系统排名不一致？
                  </div>
                        <div className='cooperation-reason'>
                          系统中排名为自动抓取，每天抓取一次，由于有些词的地区排名差异及百度不同地区服务器的更新策略问题，
                  有可能客户直接查询的排名与系统不一致，排名均以系统抓取到的为准，一般过一两天，两者会趋于一致。
                  </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            
          </div>
        </div>


      </div>
    )
  }
}
export default SeoPage;
