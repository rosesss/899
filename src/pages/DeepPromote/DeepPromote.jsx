import React, { Component } from 'react'
import './index.scss';
import ProInstro from './Component/ProInstro';
import ProAdvantage from './Component/ProAdvantage';
import ProDesc from './Component/ProDesc';
import CooperationProcess from './Component/CooperationProcess';
class DeepPromote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            functions: [
                {
                    id:1,
                    title: '产品介绍'
                },
                {
                    id: 2,
                    title: '产品优势'
                },
                {
                    id: 3,
                    title: '产品说明'
                },
                {
                    id: 4,
                    title: '合作流程'
                }
            ],
            dataIndex:0
        }
    }

    changeItem(id) {
        this.setState({
            dataIndex: id
        })
    }

    _renderProInstro() {
        return(
            <ProInstro></ProInstro>
        )
    }
    
    _renderProAdvan() {
        return (
            <ProAdvantage></ProAdvantage>
        )
    }

    _renderProDesc() {
        return (
            <ProDesc></ProDesc>
        )
    }

    _renderCooPro() {
        return (
            <CooperationProcess></CooperationProcess>
        )
    }

  render() {
    return (
        <div className='deep-promote-box'>
                <div className='deep-submit-info'>
                    <div className='deep-in-box'>
                        <div className='border'></div>
                        <h3>现在提交信息</h3>
                        <h4>免费为您量身定制详细深度优化方案</h4>
                        <div className='border'></div>
                    </div>
                </div>
                <div className='in-box'>
                    <div className='submit-info-box'>
                        <div className='name'>
                            <label htmlFor="">您的姓名:</label>
                            <input type="text" />
                        </div>
                        <div className='phone'>
                            <label htmlFor="">联系电话:</label>
                            <input type="text"/>
                        </div>
                        <div className='submit-btn'>提交</div>
                        <span>注：我们会在24小时之内给您回复</span>
                    </div>
                    <div className='deep-promote-advantage'>
                        <div className='title-box'>
                            <p className='title'>深度优化的优势</p>
                            <span></span>
                        </div>
                        <div className='deep-advantage-box'>
                            <div className='advantage-item'>
                                <div className='advantage-item-msg'>
                                    <img src={require('./../../assets/image/排名提升.png')} alt="" />
                                    <p>排名提升</p>
                                </div>
                                <div className='advantage-instro'>超级群发推广系统白帽技术，让你的网站排名迅速提前，让客户很快知道你的信息，在百度、360、搜狗等浏览器中提前排名。</div>
                            </div>
                            <div className='advantage-item'>
                                <div className='advantage-item-msg'>
                                    <img src={require('./../../assets/image/时间很短.png')} alt="" />
                                    <p>时间很短</p>
                                </div>
                                <div className='advantage-instro'>1小时建站，12小时排名，3天覆盖搜索引擎，7天网站首页屏霸，让客户第一时间找到你，实现订单。</div>
                            </div>
                            <div className='advantage-item'>
                                <div className='advantage-item-msg'>
                                    <img src={require('./../../assets/image/效果显著.png')} alt="" />
                                    <p>效果显著</p>
                                </div>
                                <div className='advantage-instro'>短时间内达到屏霸效果，PC端和手机端同步展现，主力企业快速实现订单、提高收益</div>
                            </div>
                            <div className='advantage-item'>
                                <div className='advantage-item-msg'>
                                    <img src={require('./../../assets/image/超级群发.png')} alt="" />
                                    <p>超级群发</p>
                                </div>
                                <div className='advantage-instro'>提供长尾关键词，直接打到屏霸效果，几千几万关键词覆盖百度，360、搜狗等主流首页排名，互联网信息全覆盖。</div>
                            </div>
                        </div>
                        <div className='title-box'>
                            <p className='title'>深度优化产品</p>
                            <span></span>
                        </div>
                        <div className='advantage-functions'>
                            {
                                this.state.functions.map((item, index) => {
                                    let functionsClass = this.state.dataIndex === item.id ? 'functioned' : 'functions-item';
                                    return (
                                        <div className={functionsClass} key={index} onClick={() => this.changeItem(item.id)}>
                                            {item.title}
                                        </div>
                                    )
                                })
                            }
                          
                        </div>
                        <div className='functions-item-show-box'>
                            {
                                this.state.dataIndex === 1?
                                this._renderProInstro() 
                                :''
                            }
                           {
                               this.state.dataIndex === 2 ?
                                this._renderProAdvan()
                                :''
                           }
                          
                           {
                               this.state.dataIndex === 4 ?
                                this._renderCooPro()
                                :''
                           }
                            {/* <ProAdvantage></ProAdvantage>
                            <ProDesc></ProDesc>
                            <CooperationProcess></CooperationProcess> */}
                        </div>
                    </div>
                </div>
            {
                this.state.dataIndex === 3 ?
                    this._renderProDesc()
                    : ''
            }
        </div>
    )
  }
}
export default DeepPromote;
