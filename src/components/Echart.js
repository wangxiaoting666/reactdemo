import React, { Component } from 'react';
import { Tree } from 'antd';

import axios from "axios";

const { TreeNode } = Tree;
class Treetest extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
            treeData: [
               
              ],
        }
    }


      //请求接口的方法
      componentDidMount() {
        var  api='http://localhost:3004/users';
            axios.get(api)
            .then((response) =>{
        // handle success
        console.log(response.data);
        //用到this需要注意指向，箭头函数
    this.setState({
        treeData:response.data
    })

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
        }


    onLoadData = treeNode =>


    new Promise(resolve => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
          { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
        ];
        this.setState({
          treeData: [...this.state.treeData],
        });
        resolve();
      }, 1000);
    });

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.name}  dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} {...item} dataRef={item} />;
    });


     render() {
    return (

    
        <Tree loadData={this.onLoadData}>{this.renderTreeNodes(this.state.treeData)}</Tree>
    )
    
   
  }
}
export default  Treetest;