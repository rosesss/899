import React, { Component } from 'react'
import { Carousel } from 'antd';
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';
import './index.scss';

@inject('stores')
@observer
class Banner extends Component {

    @computed get homeStore() {
        return this.props.stores.homeStore;
    }

    async componentDidMount() {
        try {
            await this.homeStore.BannaerList()
        } catch (error) {
            console.log(error)
        }
       
    }
  
  onChange(a, b, c) {
    console.log(a, b, c);
  }
  render() {
      const bannaerList = this.homeStore.bannaerList;
    return (
      <div>
        <Carousel afterChange={() => this.onChange()} autoplay={true}>
            {
                    bannaerList.length > 0 ? bannaerList.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={`http://seoapi.chamhuan.com${item.bannerUrl}`} alt="" />
                            </div>
                        )
                    })
                    :''
            }
        </Carousel>
      </div>
    )
  }
}

export default Banner;
