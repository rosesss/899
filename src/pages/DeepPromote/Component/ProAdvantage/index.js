import React, { Component } from 'react'
import './index.scss';
class ProAdvantage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proVanTagList: [
                {
                    id: 1,
                    title: '关键词精准',
                    desc: '成千上万的长尾关键词，竞争小，防止无效消费，实现霸屏垄断。'
                }
            ]
        }
    }
    
  render() {
    return (
      <div className='pro-advanr-tage-box'>
          <h5>产品优势</h5>
          <div className='pro-advan-list-box'>
            {
                [1,2,3,4,5,6,7,8,9].map((item, index) => {
                    return (
                        <div className='pro-advan-item' key={index}>
                            <p>关键词精准</p>
                            <div className='pro-advan-item-desc'>
                                成千上万的长尾关键词，竞争小，防止无效消费，实现霸屏垄断。
                            </div>
                        </div>
                    )
                })
            }
          </div>
      </div>
    )
  }
}
export default ProAdvantage;
