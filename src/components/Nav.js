import React, { Component } from 'react';
import { List, Avatar } from 'antd';

import axios from 'axios'

class Listtest extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
            list: [
             
              ],
        }
    }

     //请求接口的方法
     componentDidMount() {
        //var  api='https://www.apiopen.top/weatherApi?city=%E4%B8%8A%E6%B5%B7';
        var  api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
            axios.get(api)
      .then((response) =>{
        // handle success
        console.log(response.data.result);
        //用到this需要注意指向，箭头函数
        this.setState({
       list:response.data.result
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
        }

 
    render() {
        return (
            <List
            itemLayout="horizontal"
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item>

                <List.Item.Meta
                  avatar={<Avatar src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />}
                  title={<a href="https://ant.design">{item.username}</a>}
                  description={item.title}
                />

              </List.Item>
            )}
          />        
        )
    }
}
export default  Listtest;