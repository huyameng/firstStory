var view = require("../../views/main.html");
var Top = require("./header.js");
var Bottom = require("./foot.js");
 var Tshirt =require("./T-shirt.js");
 var $=require("jquery")
var Main = {
    template:view,
    components:{
        Top:Top,
        Bottom:Bottom,    
    },
    data(){
     return{
        scroll:"",
        data1:false
     }
    },
    methods:{
        fun(){
          this.scroll =document.body.scrollTop;
          if(this.scroll>0){
              this.data1=true;
          }else{this.data1=false};
        },
        xx:function(){
         $("html,body").animate({scrollTop:0},500)
        }
      
    },
   mounted:function(){
      window.addEventListener('scroll', this.fun);
   }
    
};




module.exports = Main;