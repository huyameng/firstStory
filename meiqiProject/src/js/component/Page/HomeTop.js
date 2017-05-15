import {IndexLink} from "react-router";
var HomeTop=React.createClass({
     getInitialState:function(){
        return {
           index:0
        }
        
    },
      TopClick:function(i){
         this.setState({
            index:i
        })
    
    },
   
    render:function(){
          var that=this;
         var TopList = this.props.TopList.map(function(item,key){
      
     return <li key={key} onClick={function(){that.TopClick(item.index)}} className={that.state.index== item.index ? "TopActive":""}>
            <IndexLink to={item.path} className="TOPLink">{item.name}</IndexLink>
        </li>
    })
      return(
          <div className="HomeTop">
              <ul>
            {TopList}
            
            </ul>
             <div className="HomeAdd">
                 <IndexLink to="" className="iconfont icon-jiahao"></IndexLink>
                  <IndexLink to="" className="iconfont icon-sousuo-sousuo"></IndexLink> 
             </div>
          </div>
      )
    }
});

module.exports = HomeTop;