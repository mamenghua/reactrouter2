import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';
class Par extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    render(){
        return(<div>
            <h3>Params传参</h3>
            {
                this.state.list.map((item,i)=>{
                    return(
                        <div key={i}>
                            <Link to={"/detail1/"+item.pid}>{item.pname}</Link>
                        </div>
                    )
                })
            }
            <hr/>
            {this.props.children}
        </div>)
    }
    componentDidMount(){
        axios({
            method:'get',
            url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
            params:{uid:19802}
        }).then((data)=>{
            // 注：使用this.state.list = data.data.data 
            // 这种方式可以改数据 但是 页面视图不会改变
            // 一定要使用this.setState
            this.setState({list:data.data.data})
        })
    }
}
export default Par;