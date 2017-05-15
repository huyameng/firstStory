var view = require("../../views/header.html");

var Top = {
    template:view,
    data:function(){
        return {
            listP:[
                {name:"衬衫",path:"/Tshirt"},
                {name:"夹克",path:"/jiake"},
                {name:"POLO衫",path:"/polo"},
                {name:"牛仔裤",path:"/jeans"},
                {name:"休闲裤",path:"/xian"}
            ]
        }
    }
}

module.exports = Top;