import { Footer} from "./PagePublic.js";

var PageMain = React.createClass({
    getInitialState:function(){
        return{
            foot:[
                {title:"资讯",classname:"iconfont icon-zixun",path:"/home",index:"0"},
                {title:"社区",classname:"iconfont icon-shequ",path:"/socity",index:"1"},
                {title:"易购",classname:"iconfont icon-erjixiankong",path:"/shop",index:"2"},
                {title:"发现",classname:"iconfont icon-iconfontzhizuobiaozhun07",path:"/find",index:"3"},
                {title:"我的",classname:"iconfont icon-wo",path:"/mine",index:"4"}
            ]
        }
    },
    render:function(){
        return (
         <div>
             {this.props.children}
             <Footer dataList={this.state.foot}  index={this.state.index}/>
         </div>
        )
    }
});

export default PageMain;