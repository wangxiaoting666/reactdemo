import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../asset/css/tab.css'

class Banner extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
        }
    }
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h3><img src={require('../asset/images/7.jpg')}  alt="logo" />></h3>
                </div>
                <div>
                    <h3><img src={require('../asset/images/8.jpg')}  alt="logo" />></h3>
                </div>
                <div>
                    <h3><img src={require('../asset/images/9.jpg')}  alt="logo" />></h3>
                </div>
                <div>
                    <h3><img src={require('../asset/images/10.jpg')}  alt="logo" />></h3>
                </div>
            </Carousel>
        )
    }
}
export default Banner;