import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';
import './index.scss';

@inject('stores')
@observer
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {
                    id:1,
                    name: '首页',
                    router: '11'
                },
                {
                    id:2,
                    name: '快排SEO',
                },
                {
                    id:3,
                    name: '深度推广',
                },
                {
                    id:4,
                    name: 'SEO案例',
                },
                {
                    id:5,
                    name: '晨寰讲堂',
                },
                {
                    id:6,
                    name: '关于我们',
                }
            ],
            pageIndex:1
        }
    }

    @computed get homeStore() {
        return this.props.stores.homeStore;
    }
    
    changePage(id) {
        console.log(this.props,'props')
        this.homeStore.changeRoute(id);
        const routerId = this.homeStore.routerId;
        switch (routerId) {
            case 1:
                this.setState({
                    pageIndex: 1
                })
                this.props.history.push('/')
            break;
            case 2:
                this.setState({
                    pageIndex: id
                })
                this.props.history.push('/fastrowseo')
                break;
            case 3:
                this.setState({
                    pageIndex: id
                })
                this.props.history.push('/deeppromote')
                break;
            case 4:
                this.setState({
                    pageIndex: id
                })
                this.props.history.push('/caseseo')
                break;
            case 5:
                this.setState({
                    pageIndex: id
                })
                this.props.history.push('/class')
                break;    
            case 6:
                this.setState({
                    pageIndex: id
                })
                this.props.history.push('./aboutus')
                break;
            default:
                break;
        }
    }
    
    render() {
        const routerId = this.homeStore.routerId;
        return (
            <div className='nav-box'>
                <div className='in-box'>
                    {
                        this.state.navList.map((item, index) => {
                            return (
                                <div className='nav-item' onClick={() => this.changePage(item.id)} key={index}>
                                    <div >
                                        {item.name}
                                    </div>
                                    {
                                        routerId === item.id ?
                                            <span></span>
                                            : ''
                                    }
                                </div>

                            )
                        })
                    }
                </div>
                
            </div>
        );
    }
}

export default Navigation;