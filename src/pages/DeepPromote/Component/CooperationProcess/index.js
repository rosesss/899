import React, { Component } from 'react'
import './index.scss';
class CooperationProcess extends Component {
  render() {
    return (
      <div className='coo-pro-box'>
            <div className='cooperation-step-box'>
                <h5>合作流程</h5>
                <div className='cooperation-box'>
                    <div className='coo-step'>
                        <img src={require('./../../../../assets/image/step1.png')} alt=""/>
                        <p className='desc'>客户提出需求</p>
                        <p className='desc'>或提供长尾词给我们</p>
                    </div>
                    <div className='arrow-img'>
                        <img src={require('./../../../../assets/image/arrow.png')} alt=""/>
                    </div>
                    <div className='coo-step'>
                        <img src={require('./../../../../assets/image/step2.png')} alt="" />
                        <p className='desc'>需求分析信息，双方确认关键词</p>
                        <p className='desc'>达成协议，合同签订并付款</p>
                    </div>
                    <div className='arrow-img'>
                        <img src={require('./../../../../assets/image/arrow.png')} alt="" />
                    </div>
                    <div className='coo-step'>
                        <img src={require('./../../../../assets/image/step3.png')} alt="" />
                        <p className='desc'>3-7天大量出排名</p>
                        <p className='desc'>见效快，实现百度屏霸</p>
                    </div>
                    <div className='arrow-img'>
                        <img src={require('./../../../../assets/image/arrow.png')} alt="" />
                    </div>
                    <div className='coo-step'>
                        <img src={require('./../../../../assets/image/step4.png')} alt="" />
                        <p className='desc'>每天上百度首页的关键词</p>
                        <p className='desc'>开始按天计费</p>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
export default CooperationProcess;
