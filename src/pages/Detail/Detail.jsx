import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';
import './index.scss';

@inject('stores')
@observer
class Detail extends Component {
    constructor(props) {
        super(props);
        
    }

    @computed get homeStore() {
        return this.props.stores.homeStore;
    }
    
    async componentDidMount() {
        const id = this.props.match.params.id;
        try {
            await this.homeStore.getCaseDetail(id);
        } catch (error) {
            console.log(error)
        }
    }
    

  render() {
    const detail = this.homeStore.detail;
    console.log(detail,'detail')
    const type = this.props.match.params.type
    return (
      <div className="detail-box">
        <div className="in-detail-box">
            <div className="detail-from">
                首页>{type === 'case' ? 'SEO案例' : '晨寰讲堂'}>详情
            </div>
            <div className="detail">
                <div className="detail-title">{detail.caseName}</div>
                <div className="detail-time">{detail.createTime ? detail.createTime.split(' ')[0] : ''}</div>
                <div className="detail-content" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
            </div>
        </div>
      </div>
    )
  }
}
export default Detail;
