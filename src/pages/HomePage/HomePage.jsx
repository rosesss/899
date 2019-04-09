import React, { Component } from 'react';
import { Carousel } from 'antd';
import {Link} from 'react-router-dom';
import Header from './../component/header';
import Navigation from './../component/Navigation';
import fastImg from './../../assets/image/fast.png';
import deepImg from './../../assets/image/deep.png';
import internetImg from './../../assets/image/internet.png';
import dangerousImg from './../../assets/image/违规图标.png';
import medicalImg from './../../assets/image/医疗图标.png';
import financialImg from './../../assets/image/金融.png';
import notbrandImg from './../../assets/image/品牌.png';
import enterpriseImg from './../../assets/image/虚假宣传.png';
import './index.scss';
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
            ]
        }
    }
    
     onChange(a, b, c) {
        console.log(a, b, c);
      }

    render() {
        return (
            <div className='home-box'>
                <div className='header'>
                    <Header></Header>
                    <Navigation></Navigation>
                    <div className='img-box'>
                        <Carousel afterChange={() => this.onChange()}>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </div>
                    <div className='services-box'>
                        <div className='title-box'>
                            <p className='title'>服务项目内容</p>
                            <span></span>
                        </div>
                        
                        <div className='service'>
                        {
                            this.state.servicesList.map((item, index) => {
                                return (
                                <div className='service-item'>
                                    <img src={item.img} alt=""/>
                                    <p className='name'>{item.name}</p>
                                    <div className='instro'>
                                        <p>{item.instro}</p>
                                        <p>{item.title}</p>
                                    </div>
                                    <Link className='todetail-box' to='/'>进一步了解</Link>
                                </div>
                                )
                            })
                        }
                        </div>
                    </div>

                    <div className='not-services'>
                        <div className='title-box'>
                            <p className='title'>晨寰网络不服务以下5种类型企业</p>
                            <span></span>
                        </div>
                        <div className='not-services-box'>
                            {
                                this.state.notServicesList.map((item, index) => {
                                    return(
                                        <div className='not-services-item'>
                                            <img src={item.img} alt=""/>
                                            <p>{item.type}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;