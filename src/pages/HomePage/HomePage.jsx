import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';
import {Link} from 'react-router-dom';
import Header from './../component/header';
import Banner from './../component/Banner';
import Navigation from './../component/Navigation';
import Footer from './../component/Footer';
import fastImg from './../../assets/image/fast.png';
import deepImg from './../../assets/image/deep.png';
import internetImg from './../../assets/image/internet.png';
import dangerousImg from './../../assets/image/违规图标.png';
import medicalImg from './../../assets/image/医疗图标.png';
import financialImg from './../../assets/image/金融.png';
import notbrandImg from './../../assets/image/品牌.png';
import enterpriseImg from './../../assets/image/虚假宣传.png';
import './index.scss';

@inject('stores')
@observer
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesList:[
                {
                    name:'快排SEO',
                    instro: '不排首页  不扣费用户',
                    title:'一天见效  全网最低',
                    img:fastImg
                },
                {
                    name:'深度推广',
                    instro: '全网覆盖  成千上万不是梦',
                    title:'强势屏霸  首页屏霸不是梦',
                    img:deepImg
                },
                {
                    name:'晨寰网络',
                    instro: '超低价格  高效益回报客户',
                    title:'排名超前  网络公司技术支持',
                    img:internetImg
                },
            ],
            notServicesList: [
                {
                    type:'违规、违法打擦边球的企业',
                    img:dangerousImg
                },
                {
                    type:'医疗类企业',
                    img:medicalImg
                },
                {
                    type:'金融类企业',
                    img:financialImg
                },
                {
                    type:'不重视品牌的企业',
                    img:notbrandImg
                },
                {
                    type:'要求虚假宣传的企业',
                    img:enterpriseImg
                }
            ],
            page: 1,
            size: 5,
        }
    }

    @computed get homeStore() {
        return this.props.stores.homeStore;
    }
    
    async componentDidMount() {
        try {
            await this.homeStore.ServiceCustomerList()
        } catch (error) {
            console.log(error)
        }
        this.getCase()
        this.getClass()
    }
    
    async getCase() {
        try {
            await this.homeStore.getCaseListForPageSize(1,5);
        } catch (error) {
            console.log(error);
        }
    }

    async getClass() {
        try {
            await this.homeStore.getClassListForPageSize(1,5);
        } catch (error) {
            console.log(error);            
        }
    }

    gotoNav(title) {
       switch (title) {
            case '快排SEO':
               this.homeStore.changeRoute(2);
                this.props.history.push('/fastrowseo')
                break;
            case '深度推广':
               this.homeStore.changeRoute(3);
                this.props.history.push('/deeppromote')
                break;
            case '晨寰网络':
               this.homeStore.changeRoute(6);
                this.props.history.push('/aboutus')
                break;
            default:
                break;
        }
    }

    render() {
        const serviesList = this.homeStore.serviesList;
        return (
            <div className='home-box'>
                    <div className='header'>
                        {/* <Header></Header>
                        <Navigation {...this.props}></Navigation>
                        <Banner></Banner> */}
                    
                        <div className='services-box'>
                            <div className='in-home-box'>
                                <div className='title-box'>
                                    <p className='title'>服务项目内容</p>
                                    <span></span>
                                </div>

                                <div className='service'>
                                    {
                                        this.state.servicesList.map((item, index) => {
                                            return (
                                                <div className='service-item' key={index}>
                                                    <img src={item.img} alt="" />
                                                    <p className='name'>{item.name}</p>
                                                    <div className='instro'>
                                                        <p>{item.instro}</p>
                                                        <p>{item.title}</p>
                                                    </div>
                                                    <div className='todetail-box' onClick={() => this.gotoNav(item.name)}>进一步了解</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='not-services'>
                            <div className='in-home-box'>
                                <div className='title-box'>
                                    <p className='title'>晨寰网络不服务以下5种类型企业</p>
                                    <span></span>
                                </div>
                                <div className='not-services-box'>
                                    {
                                        this.state.notServicesList.map((item, index) => {
                                            return (
                                                <div className='not-services-item' key={index}>
                                                    <img src={item.img} alt="" />
                                                    <p>{item.type}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    <div className='services-enterprise'>
                        <div className='in-home-box'>
                            <div className='title-box'>
                                <p>我们服务的企业有哪些</p>
                                <span></span>
                            </div>
                            <div className='all-enterprise-box'>
                                {
                                    serviesList.length > 0 ? serviesList.map((item, index) => {
                                        return (
                                            <div key={index} className='enterprise-item'>
                                                <img src={`http://seoapi.chamhuan.com${item.url}`} alt="" />
                                            </div>
                                        )
                                    })
                                    :''
                                }
                            </div>
                        </div>
                    </div>


                    <div className='case-class-box'>
                        <div className='in-box-list'>
                            <div className='case-box'>
                                <div className='title-box'>
                                    <p>案例展示</p>
                                    <span></span>
                                </div>
                                <div className='show-box'>
                                    {
                                        this.homeStore.homeCaseList.length > 0 ? this.homeStore.homeCaseList.map((item, index) => {
                                            return(
                                                <div className='item' key={index}>
                                                    <img src={require('./../../assets/image/新闻图.png')} alt=""/>
                                                    <div className='msg'>
                                                        <p className='item-name'>{item.caseName}</p>
                                                        <div className='item-instro' dangerouslySetInnerHTML={{ __html: item.content }} />
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :''
                                    }
                                </div>
                            </div>
                            <div className='class-box'>
                                <div className='title-box'>
                                    <p>宸寰讲堂</p>
                                    <span></span>
                                </div>
                                <div className='show-box'>
                                    {
                                        this.homeStore.homeClassList.length > 0 ? this.homeStore.homeClassList.map((item, index) => {
                                            return (
                                                <div className='item' key={index}>
                                                    <img src={require('./../../assets/image/新闻图.png')} alt="" />
                                                    <div className='msg'>
                                                        <p className='item-name'>{item.forumName}</p>
                                                        <div className='item-instro' dangerouslySetInnerHTML={{ __html: item.content }} />
                                                    </div>
                                                </div>
                                            )
                                        }) : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default HomePage;