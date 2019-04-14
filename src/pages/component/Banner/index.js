import React, { Component } from 'react'
import { Carousel } from 'antd';
import './index.scss';
class Banner extends Component {
  onChange(a, b, c) {
    console.log(a, b, c);
  }
  render() {
    return (
      <div>
        <Carousel afterChange={() => this.onChange()} autoplay={true}>
          <div>
            <img src={require('./../../../assets/image/banner.png')} alt="" />
          </div>
          <div>
            <img src={require('./../../../assets/image/banner.png')} alt="" />
          </div>
          <div>
            <img src={require('./../../../assets/image/banner.png')} alt="" />
          </div>
          <div>
            <img src={require('./../../../assets/image/banner.png')} alt="" />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Banner;
