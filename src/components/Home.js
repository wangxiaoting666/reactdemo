import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Echart from './Echart';
import Parent from './Parent';
import Child from './Child';
import Tab from './Tab';
import Nav from './Nav';
import About from './About';
import News from './News';
import Add from './Add';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Laytest extends Component {
  constructor(props) {
    super(props);
    //react定义数据
    this.state = {
    }
  }
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      图表相关
                      </span>
                  }
                >
                  <Menu.Item key="1"> <Link to="/echart">统计图</Link></Menu.Item>
                  <Menu.Item key="2"> <Link to="/parent">table统计图</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/child">树形菜单</Link></Menu.Item>

                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      数据请求
                      </span>
                  }
                >
                  <Menu.Item key="5"> <Link to="/parent">表格</Link></Menu.Item>
                  <Menu.Item key="6"> <Link to="/child">树形控件</Link></Menu.Item>
                  <Menu.Item key="7"><Link to="/tab">Tab</Link></Menu.Item>
                  <Menu.Item key="8"><Link to="/nav">Nav</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      ant组件
                      </span>
                  }
                >
                  <Menu.Item key="9"><Link to="/news">轮播图</Link></Menu.Item>
                  <Menu.Item key="10"><Link to="/about">卡片效果</Link></Menu.Item>
                  <Menu.Item key="11"><Link to="/add">add</Link></Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Route exact path="/echart" component={Echart} />
                <Route exact path="/parent" component={Parent} />
                <Route exact path="/child" component={Child} />
                <Route exact path="/tab" component={Tab} />
                <Route exact path="/nav" component={Nav} />
                <Route exact path="/news" component={News} />
                <Route exact path="/about" component={About} />
                <Route exact path="/add" component={Add} />
              </Content>
            </Layout>
          </Layout>
        </Layout>

      </Router>
    )
  }
}
export default Laytest;