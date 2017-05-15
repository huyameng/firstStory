import HomeTop from "./Page/HomeTop.js";
import SwiperList from "./Page/Swiper.js";
import Action from "../action/HomeAction.js";
import Store from "../store/HomeStore";
import HomeList from "./Page/HomeList";
var Home=React.createClass({
    getInitialState:function(){
        return{
          TopList:[],
          SwiperList:[],
          HomeList:[]
        }
    },
    componentDidMount:function(){ 
      Store.addListener(this.updateView)
      Action.newsInit();
    },
    updateView:function(){
     var data = Store.getAll();
     this.setState({
        TopList:data.TopList,
        SwiperList:data.SwiperList,
        HomeList:data.HomeList
     })
    },
    componentWillUnmount:function(){
     
          Store.removeListenerx(this.updateView)
      
    },
    render:function(){
        return (
            <div className="Home">
             <HomeTop TopList={this.state.TopList}/>
            <SwiperList SwiperList={this.state.SwiperList} />
            <HomeList HomeList={this.state.HomeList} />
            </div>  
        )
    }
});
module.exports = Home;