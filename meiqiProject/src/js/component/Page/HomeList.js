import {IndexLink} from "react-router";

var HomeList=React.createClass({


    render:function(){
        
        var HomeList=this.props.HomeList.map(function(item,key){
            var url="";
            var sr=url.concat("http://c2.biketo.com",item.titlepic);
        
         return ( <IndexLink to="" className="HomeList-pic" key={key}>
            <div className="HomeList-pic-w">
                <p>
                   {item.title}
                </p>
            
                <div className="HomeList-pic-box">
               <span className="HomeList-pic-title">{item.column_name}</span>
         <span className="HomeList-pic-click"><span className="id">{item.onclick}</span>点击</span>
                <span className="HomeList-pic-time">12分钟前</span>
                </div>
            </div>
            <div className="HomeList-pic-p">
                <img src={sr}/>
            </div>

         </IndexLink> ) 
        });

      return (
          <div className="HomeList">
              <ul>
                {HomeList}
              </ul>
          </div>
      )
    
    }   
});

module.exports = HomeList;