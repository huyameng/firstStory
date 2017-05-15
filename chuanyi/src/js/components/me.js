var view = require("../../views/me.html");
var Bottom = require("./foot.js");
var Mehandle = require("./me-handle.js");
var url1 = require("../../image/pic-1.jpg");
var url2 = require("../../image/pic-2.jpg");
var url3 = require("../../image/pic-3.jpg");
var url4 = require("../../image/pic-4.jpg");
var Me={
    template:view,
    components:{
       "Bottom":Bottom,
       "Mehandle":Mehandle
    },
    data:function(){
        return{
            PPList:[
                {name:"等级",title:"LV.0"},
                {name:"积分",title:"20"},
                {name:"金币",title:"0"}
            ],
            Com:[
                {classname:"icon-shoucang1",title:"收藏"},
                {classname:"icon-yhq",title:"优惠券"},
                {classname:"icon-xiaoxi",title:"消息"},
                {classname:"icon-pinglun1",title:"评论"}
            ],
            Order:[
               {classname:"icon-daifukuan-copy",title:"待付款"},
                {classname:"icon-benzi-copy",title:"进行中"},
                {classname:"icon-yiwancheng",title:"已完成"},
                {classname:"icon-dingdan",title:"所有订单"}
            ],
            Url:[
                {src:url1,title:"地址管理"},
                {src:url2,title:"联系客服"},
                {src:url3,title:"订阅"},
                {src:url4,title:"爆料"},
            ]
        }
    }
}

module.exports = Me;