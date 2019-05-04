import React, { Component } from 'react'
import './index.scss';
class ProInstro extends Component {
  render() {
    return (
      <div className='pro-instro-box'>
            <div className='super-group'>
                <h5>超级群发体统</h5>
                <div className='super-group-instro'>
                    <p>超级群发系统是一套简单/高效/低成本，覆盖全网络的网络推广系统</p>
                    <p>通过超级群发系统的强大资源和智能排名算法，帮助企业突破技术瓶颈，让客户快速找到你的产品</p>
                    <p>从而获得优质流量和订单，提升企业在网络中的品牌影响力</p>
                </div>
            </div>
            <div className='in-view-group-box'>
                <h5>针对群体</h5>
                <div className='view-group-instro'>
                    <img src={require('./../../../../assets/image/插画.png')} alt=""/>
                    <div className='instro-box'>
                        {
                            [1,2,3.4,5,6,7,8].map((item, index) => {
                                return (
                                    <div className='instro-box-item' key={index}>
                                        <div className='item-label'></div>
                                        <div className='item-content'>招不到团队，人员流失</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
export default ProInstro;
