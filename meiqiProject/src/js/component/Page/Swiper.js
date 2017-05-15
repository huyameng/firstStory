var Swiper = require("swiper");
require("swiper/dist/css/swiper.css");

var SwiperList = React.createClass({
    getInitialState:function(){
      return{
          swiper:null
      }
    },
    componentDidUpdate:function(){
      if(this.state.swiper==null){
          
 var  swiper = new Swiper(".swiper-container",{
                loop : true,
                // autoplay : 2000,
                speed : 1000,
                pagination :".swiper-pagination"
            });
        this.setState({
            swiper:swiper
        })}else{
          this.state.swiper.updateSlidesSize()
        }        
    },
    render:function(){
        var slideList=this.props.SwiperList.map(function(item,key){
            
                var url1="";
               var src=item.hb;
               var url="http://c2.biketo.com";
               var url2=url1.concat(url,src);
            
                      
        return( <div className="swiper-slide" key={key}>
                    <a href={item.uri} >
                        <img src={url2} />
                      
                    </a>
                </div>
                )
        });
        return (
              <div className="swiper-container">
                <div className="swiper-wrapper">
                    {slideList}
                </div>
                <div className ="swiper-pagination"></div>
            </div>
        )
    }
});

module.exports = SwiperList;