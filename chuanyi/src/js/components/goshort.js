var Bottom = require("./foot.js");
var view = require("../../views/goshort.html");
var goshortList = require("./goshort-list.js");
var $=require("jquery");

var goshort = {
    template:view,
    components:{
        "Bottom":Bottom,
        "goshortList":goshortList
    },
    data(){
        return{
            isshow:false,
            data:false,
            data1:false
        }
    },
    methods:{
        box:function(){
            this.isshow = !this.isshow;
             this.data = this.isshow;
             this.data1 = this.isshow;
           if(this.isshow){
              $(".btn-box").css({opacity:1})
          }else{
              $(".btn-box").css({opacity:0.6})  
          }  
        },
          bx:function(){
        this.data =!this.data;
        this.data1=this.data;
         if(this.data){
              $(".btn-box").css({opacity:1})
          }else{
              $(".btn-box").css({opacity:0.6})  
          }  
    },
    by:function(){
        this.data1=!this.data1;
           if(this.data1){
              $(".btn-box").css({opacity:1})
          }else{
              $(".btn-box").css({opacity:0.6})  
          }  
    }
       
    }
  
}

module.exports = goshort;