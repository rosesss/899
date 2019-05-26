import React, { Component } from 'react'
import './index.scss';
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';
import caseImg from './../../assets/image/case.png';

@inject('stores')
@observer
class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            pageSize:5,
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


    @computed get homeStore() {
        return this.props.stores.homeStore;
    }

    componentDidMount() {
        this.getAllClassList()
        this.getClassListForpageSize()
    }

    async getAllClassList() {
        try {
            await this.homeStore.getAllClassList()
        } catch (error) {
            console.log(error)
        }
    }

    async getClassListForpageSize() {
        try {
            await this.homeStore.getClassListForPageSize(this.state.page, this.state.pageSize)
        } catch (error) {
            console.log(error)
        }
    }

    gotoDetail(id) {
        this.props.history.push(`/classdetail/${id}`)
    }
    

    render() {
        const caseList = this.state.seocaseList;
        let firstList = caseList.splice(0, 1);
        const classList = this.homeStore.classLists;
        // console.log(caseList[0].created_time.slice(7))
        // console.log(caseList[0].created_time.substring(0, 6))
        return (
            <div className='case-seo-box'>
                <div className='in-case-box'>
                    <div className='title-box'>
                        <p className='title'>晨寰讲堂</p>
                        <span></span>
                    </div>
                    <div className='seo-case-list'>
                        {/* <div className='seo-case-first'>
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
                        </div> */}
                        {
                            classList.length > 0 ? classList.map((item, index) => {
                                const date = item.updateTime.split(' ')[0]
                                const day = date.slice(8)
                                const time = date.substring(0, 7)
                                return (
                                    <div className='seo-case-item' key={index} onClick={() => this.gotoDetail(item.id)}>
                                        <div className='seo-case-img'>
                                            {
                                                item.smallImage ?
                                                    <img src={`http://seoapi.chamhuan.com/${item.smallImage}`} alt="" />
                                                    :
                                                    <img src={require('./../../assets/image/case.png')} alt="" />
                                            }
                                        </div>
                                        <div className='item-msg'>
                                            <div className='item-desc-msg'>
                                                <p className='item-name'>{item.caseName}</p>
                                                <div className='item-keywords'>
                                                    关键词:
                                                <div className='keywords-item'>{item.keyWords}</div>
                                                </div>
                                                <div className='item-desc'>
                                                    {item.caseDescribe}
                                                </div>
                                            </div>
                                            <div className='item-time'>
                                                <p className='time-day'>{day}</p>
                                                <p className='item-mouth'>{time}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                            :''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Class;

