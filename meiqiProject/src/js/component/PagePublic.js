import {IndexLink} from "react-router";

var Footer= React.createClass({
    getInitialState:function(){
        return {
           index:0
        }
        
    },
      handleClick:function(i){
         this.setState({
            index:i
        })
    
    },
    render:function(){
        var that=this;
     var data = this.props.dataList.map(function(item,key){
return <li key={key} onClick={function(){that.handleClick(item.index)}} className={that.state.index== item.index ? "active":""} >
            <IndexLink className={item.classname} to={item.path}></IndexLink>
            <IndexLink className="foods-title" to={item.path}>{item.title}</IndexLink>
         </li>
     })
        return (
            <div className="footer">
               <ul>
              {data}
              </ul>
            </div>
        )
    }
});
export{Footer}