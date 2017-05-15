var view = require("../../views/classlist.html");
var Bottom = require("./foot.js");
var Icon= require("../../json/brand.json");
var classlistList = require("./classlist-list.js");
var Classlist = {
    template:view,
    components:{
        "Bottom":Bottom,
        "classlistList":classlistList
    },
     data:function(){
         console.log(Icon)
            return{
                Icon:
                   Icon 
                
            }
    }
}

module.exports = Classlist;