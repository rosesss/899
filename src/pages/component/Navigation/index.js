import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {
                    id:1,
                    name: '首页',
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

    changePage(id) {
        console.log(id)
        switch (id) {
            case 1:
                this.setState({
                    pageIndex: id
                })
                this.props.history.push('./')
            break;
            case 2:
                this.setState({
                    pageIndex: id
                })
                this.props.history.push('./fastrowseo')
                break;
            case 3:
                this.setState({
                    pageIndex: id
                })
                this.props.history.push('./deeppromote')
                break;
            case 4:
                this.setState({
                    pageIndex: id
                })
                this.props.history.push('./caseseo')
                break;
            case 5:
                this.setState({
                    pageIndex: id
                })
                this.props.history.push('./class')
                break;    
            default:
                break;
        }
    }
    
    render() {
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
                                        this.state.pageIndex === item.id ?
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