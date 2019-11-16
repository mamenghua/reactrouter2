import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';
class Que extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    render(){
        return(<div>
            <h3>Query传参</h3>
            {
                this.state.list.map((item,i)=>{
                    return(
                        <div key={i}>
                            <Link to={{pathname:'/detail2',query:{id:item.pid}}}>{item.pname}</Link>
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
            params:{uid:19802,pagesize:10}
        }).then((data)=>{
            this.setState({list:data.data.data})
        })
    }
}
export default Que;