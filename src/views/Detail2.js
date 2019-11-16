import React,{Component} from 'react';
import axios from 'axios';
export default class Detail2 extends Component{
    constructor(props){
        super(props);
        this.state={
            list:''
        }
    }
    render(){
        let wid = {width:'500px'};
        return(
            <div>
                <h2>query传参详情</h2>
                <p>{this.state.list.pid}</p>
                <p>{this.state.list.pname}</p>
                <p>{this.state.list.pprice}</p>
                <img style={wid} src={this.state.list.pimg}/>
                <p>{this.state.list.pdesc}</p>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
        axios({
            url:'http://jx.xuzhixiang.top/ap/api/detail.php',
            params:{id:this.props.location.query.id}
        }).then((data)=>{
            console.log(data.data.data)
            this.setState({list:data.data.data})
        })
    }
    componentWillReceiveProps(a){
        console.log(a.location.query.id)
        axios({
            url:'http://jx.xuzhixiang.top/ap/api/detail.php',
            params:{id:a.location.query.id}
        }).then((data)=>{
            console.log(data.data.data)
            this.setState({list:data.data.data})
        })
    }
}