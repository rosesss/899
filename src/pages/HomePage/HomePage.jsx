import React, { Component } from 'react';
import { Carousel } from 'antd';

import Header from './../component/header';
import Navigation from './../component/Navigation';
import './index.scss';
class HomePage extends Component {
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
                </div>
            </div>
        );
    }
}

export default HomePage;