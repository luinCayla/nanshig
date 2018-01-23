import React,{Component} from 'react'
import {Link} from 'react-router'


export default class Footer extends Component {
	constructor(props){
		super(props)
        this.state = {
            navs:[
                {id:1,text:'首页',icon:'home',path:'/home'},
                {id:2,text:'分类',icon:'list',path:'/list'},
                {id:3,text:'男士',icon:'man',path:'/man'},
                {id:4,text:'购物车',icon:'cart',path:'/cart'},
                {id:5,text:'我的商城',icon:'mall',path:'/mall'},
            ]
        }
    }
    

	render(){
        let {navs} = this.state
		return (
			<footer className="footer">
                {
                    navs.map((item)=>(
                        <Link  to={item.path} key={item.id}>
                            <i className={`iconfont icon-${item.icon}`}></i>
                            <span >{item.text}</span>
                        </Link>
                    ))
                }
			</footer>
		)
		
	}
	
}