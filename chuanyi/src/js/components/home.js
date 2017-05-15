var view = require("../../views/home.html");
var swiper = require("./swiper.js");
var $=require("jquery");
var data= require("../../json/home.json");
var data1= require("../../json/home-s.json");
var data2= require("../../json/home-d.json");
var data3= require("../../json/home-w.json");
var data4= require("../../json/home-y.json");
var $=require("jquery");
var Home = {
    template:view,
    components:{
        "swiper":swiper
    },
    data:function(){
        
        return {
 List:[data,data1,data2,data3,data4]
        }
    },
    methods:{
        goods:function(){
           this.$router.push({path:"/goods"})
        }
    }
};

module.exports = Home;