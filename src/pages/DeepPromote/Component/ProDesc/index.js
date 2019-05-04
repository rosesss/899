import React, { Component } from 'react'
import './index.scss';
class ProDesc extends Component {
  render() {
    return (
      <div className='pro-desc-box'>
            <div className='pro-desc-bg-box'>
                <div className='pro-desc-msg'>
                    <h5>产品说明</h5>
                    <div className='pro-desc-steps'>
                        {
                            [1,2,3,4].map((item, index) => {
                                return (
                                    <div className='step-item'>
                                        <p>1.操作简单</p>
                                        <div className='step-desc'>
                                            不说空话只办实事，为企业提供一站式服务，从全终端建站到全网推广，超级群发每一项功能效果都是国内顶尖，含金量百分百。
                                        </div>
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
export default ProDesc;
