var view = require("../../views/foot.html");

var Bottom = {
    template:view,
    data:function(){
        return{
            list:[
                {
                    className:"icon-shouye",
                    pName:"首页",
                    path:"/home"
                },
                {
                    className:"icon-tubiao3",
                    pName:"分类",
                    path:"/classlist"
                },
                {
                    className:"icon-shopcar",
                    pName:"购物车",
                    path:"/goshort"
                },
                {
                    className:"icon-my",
                    pName:"我",
                    path:"/me"
                }
            ]
        }
    }
}

module.exports = Bottom;