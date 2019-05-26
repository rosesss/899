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
                },
                {
                    id: 2,
                    title: '快速排名',
                    desc: '7天大量出排名，屏霸推广，比传统优化更高效。'
                },
                {
                    id: 3,
                    title: '高效全网营销',
                    desc: '屏霸百度首页，排名更加稳定持久，精准流量，转化率高。'
                },
                {
                    id: 4,
                    title: '无需新建站',
                    desc: '更换网站一键搞定客户，只需提供关键词。'
                },
                {
                    id: 5,
                    title: '搜索引擎全覆盖',
                    desc: '百度PC&移动端，360搜索搜狗等所有搜索引擎。'
                },
                {
                    id: 6,
                    title: '超高转化率',
                    desc: '关键词排名打开以官网形式展现，提升用户体验度。'
                },
                {
                    id: 7,
                    title: '一键查询排名',
                    desc: '排名报表链接一目了然，随时随地关注排名效果。'
                },
                {
                    id: 8,
                    title: '流量统计系统',
                    desc: '加强客户效果的监控与查看。'
                },
                {
                    id: 9,
                    title: '零风险保障',
                    desc: '无排名不收费，数据排名天天查，每天都有工作报表。'
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
                    this.state.proVanTagList.map((item, index) => {
                    return (
                        <div className='pro-advan-item' key={index}>
                            <p>{item.title}</p>
                            <div className='pro-advan-item-desc'>
                                {item.desc}
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
