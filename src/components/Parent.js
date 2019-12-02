import React from "react"
import '../asset/css/App.css';
import {Table} from "antd"

const {Column} = Table;

class Home extends React.Component{
    //构造方法
    constructor(){
        super()
        this.state={           
              columns : [
                {
                  "deviceId": "EAFA6CCF3CDD",
                  "name": "王一博",
                  "viewPeople": "测试",
                  "card": "13125234",              
                  "phone": "13661725475",
                  "organName": "字节跳动",                               
                  "headUrl": "http://localhost:8081/pion/images/cmao.jpg",
                },
                 {
                  "deviceId": "EAFA6CCF3CDD",
                  "name": "肖战",
                  "viewPeople": "测试",
                  "card": "13125234",              
                  "phone": "13661725475",
                  "organName": "字节跳动",                               
                  "headUrl": "http://localhost:8081/pion/images/cmao.jpg",
                }, {
                  "deviceId": "EAFA6CCF3CDD",
                  "name": "肖战",
                  "viewPeople": "测试",
                  "card": "13125234",              
                  "phone": "13661725475",
                  "organName": "字节跳动",                               
                  "headUrl": "http://localhost:8081/pion/images/cmao.jpg",
                }, {
                  "deviceId": "EAFA6CCF3CDD",
                  "name": "肖战",
                  "viewPeople": "测试",
                  "card": "13125234",              
                  "phone": "13661725475",
                  "organName": "字节跳动",                               
                  "headUrl": "http://localhost:8081/pion/images/cmao.jpg",
                }, {
                  "deviceId": "EAFA6CCF3CDD",
                  "name": "肖战",
                  "viewPeople": "测试",
                  "card": "13125234",              
                  "phone": "13661725475",
                  "organName": "字节跳动",                               
                  "headUrl": "http://localhost:8081/pion/images/cmao.jpg",
                }, {
                  "deviceId": "EAFA6CCF3CDD",
                  "name": "肖战",
                  "viewPeople": "测试",
                  "card": "13125234",              
                  "phone": "13661725475",
                  "organName": "字节跳动",                               
                  "headUrl": "http://localhost:8081/pion/images/cmao.jpg",
                }
              ]
        }
    }

    render(){
      return (
        <Table dataSource ={this.state.columns} pagination={{pageSize:5}}> 
        <Column title ='序号' dataIndex='backupNo' render ={(text,recorder,index) => <span>{index +1}</span>}/>    
        <Column title ='编号' dataIndex='deviceId' />
        <Column title ='姓名' dataIndex='name' />
        <Column title ='部门名称' dataIndex='organName' />
        <Column title ='职位' dataIndex='viewPeople' />
        <Column title ='卡号' dataIndex='card' />
        <Column title ='手机号' dataIndex='phone' />
        </Table>  
      )
    }
}
export default Home