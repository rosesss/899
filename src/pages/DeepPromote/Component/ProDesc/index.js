import React, { Component } from 'react'
import './index.scss';
class ProDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodescList: [
                {
                    name:'1.操作简单',
                    desc:'每天只需文员花费十几分钟提交产品，企业咨询等文章，剩下的我们霸屏推广系统帮你搞定。'
                },
                {
                    name: '2.推广效果好',
                    desc: '10分钟就可以看到效果，除了长尾关键词，高指数词也有非常牛的效果。'
                },
                {
                    name: '3.覆盖全网',
                    desc: '网络营销无死角不管PC端还是手机端，搜索引擎，微信，B2B行业平台，超级群发做到360度全方位覆盖。'
                },
                {
                    name: '4.资源丰富',
                    desc: '超高性价比，网络资源丰富，一套超级群发，全终端，全能型网站自然排名推广，新闻营销到微信B2B群发，尽在掌握'
                },
                {
                    name: '5.背景强大',
                    desc: '效果持续有保证，超级群发技术排名实力保证效果越发持续性。'
                },
                {
                    name: '6.功能丰富',
                    desc: '不说空话只办实事，为企业提供一站式服务，从全终端建站到全网推广，超级群发每一项功能效果都是国内顶尖，含金量百分百。'
                }
            ]
        }
    }
    
  render() {
    return (
      <div className='pro-desc-box'>
            <div className='pro-desc-bg-box'>
                <div className='pro-desc-msg'>
                    <h5>产品说明</h5>
                    <div className='pro-desc-steps'>
                        {
                            this.state.prodescList.map((item, index) => {
                                return (
                                    <div className='step-item'>
                                        <p>{item.name}</p>
                                        <div className='step-desc'>
                                            {item.desc}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
export default ProDesc;
