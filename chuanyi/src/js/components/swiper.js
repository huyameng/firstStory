var view = require("../../views/swiper.html");
var Swiper = require("swiper");
require("swiper/dist/css/swiper.css");
var Swiperlist = {
    template:view,
    props:["List","goods"],
    mounted:function(){
        var swiper=new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween:30,
        paginationBulletRender: function (swiper,index, className) {
            var listName=["衬衫","夹克","POLO衫","牛仔裤","休闲裤"];
      return '<span class='+className+'>'+listName[index]+'</span>';
  }
        })
    }
}
module.exports = Swiperlist;