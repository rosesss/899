import React, { Component } from 'react'
import './index.scss';
import caseImg from './../../assets/image/case.png';
class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seocaseList: [
                {
                    id: 1,
                    title: '上海大山外语传媒有限公司',
                    created_time: '2017-6-22',
                    keywords: ['培训', '初高中', '全国'],
                    desc: '该公司原始排名50名，通过晨寰网络15天的优化，顺利达到百度首页，排名第八',
                    cover: caseImg,
                },
                {
                    id: 2,
                    title: '上海大山外语传媒有限公司',
                    created_time: '2017-6-22',
                    keywords: ['培训', '初高中', '全国'],
                    desc: '该公司原始排名50名，通过晨寰网络15天的优化，顺利达到百度首页，排名第八',
                    cover: caseImg,
                },
                {
                    id: 3,
                    title: '上海大山外语传媒有限公司',
                    created_time: '2017-6-22',
                    keywords: ['培训', '初高中', '全国'],
                    desc: '该公司原始排名50名，通过晨寰网络15天的优化，顺利达到百度首页，排名第八',
                    cover: caseImg,
                },
                {
                    id: 4,
                    title: '上海大山外语传媒有限公司',
                    created_time: '2017-6-22',
                    keywords: ['培训', '初高中', '全国'],
                    desc: '该公司原始排名50名，通过晨寰网络15天的优化，顺利达到百度首页，排名第八',
                    cover: caseImg,
                },
                {
                    id: 5,
                    title: '上海大山外语传媒有限公司',
                    created_time: '2017-6-22',
                    keywords: ['培训', '初高中', '全国'],
                    desc: '该公司原始排名50名，通过晨寰网络15天的优化，顺利达到百度首页，排名第八',
                    cover: caseImg,
                },
            ]
        }
    }

    render() {
        const caseList = this.state.seocaseList;
        let firstList = caseList.splice(0, 1);
        console.log(caseList[0].created_time.slice(7))
        console.log(caseList[0].created_time.substring(0, 6))
        return (
            <div className='case-seo-box'>
                <div className='in-case-box'>
                    <div className='title-box'>
                        <p className='title'>晨寰讲堂</p>
                        <span></span>
                    </div>
                    <div className='seo-case-list'>
                        <div className='seo-case-first'>
                            <img src={firstList[0].cover} alt="" />
                            <div className='first-msg'>
                                <p className='first-time'>{firstList[0].created_time}</p>
                                <div className='first-name'>{firstList[0].title}</div>
                                <div className='first-keywords'>
                                    <span>关键词:</span>
                                    <div className='keywords-box'>
                                        {
                                            firstList[0].keywords.map((item, index) => {
                                                return (
                                                    <span key={index}>{item}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='first-desc'>{firstList[0].desc}</div>
                                <div className='see-more'>查看更多</div>
                            </div>
                        </div>
                        {
                            caseList.map((item, index) => {
                                const day = item.created_time.slice(7)
                                const time = item.created_time.substring(0, 6)
                                return (
                                    <div className='seo-case-item' key={index}>
                                        <div className='seo-case-img'>
                                            <img src={item.cover} alt="" />
                                        </div>
                                        <div className='item-msg'>
                                            <div className='item-desc-msg'>
                                                <p className='item-name'>{item.title}</p>
                                                <div className='item-keywords'>
                                                    关键词:
                                                {
                                                        item.keywords.map((rem, index) => {
                                                            return (
                                                                <div className='keywords-item' key={index}>{rem}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className='item-desc'>
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item-time'>
                                            <p className='time-day'>{day}</p>
                                            <p className='item-mouth'>{time}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Class;

