var view = require("../../views/goshort-list.html");
var $=require("jquery");
var GoshortList = {
    template:view,
    props:["bx","data","by","data1"],
    data:function(){
        return{
            num:1
        }
    },
    methods:{
         add:function(){
         
         this.num++;
        },
        jian:function(){
           if(this.num<=1){
                return
            }
            this.num--
        }
    }
  

}

module.exports =  GoshortList;