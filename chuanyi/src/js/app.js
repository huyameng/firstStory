require("../less/style.less");
import VueRoute from "vue-router";
import Main from "./components/main.js";
import Home from "./components/home.js";
import Me from "./components/me.js";
import goshort from "./components/goshort";
import classlist from "./components/classlist";
import goods from "./components/goods";
require("../less/ba.less");
Vue.use(VueRoute);




var routes=[
    {path:"/",component:Main,redirect:"/home",children:[
       {path:"/home",component:Home},
    ]},
    {path:"/classlist",component:classlist},
    {path:"/goshort",component:goshort},
    {path:"/me",component:Me},
    {path:"/goods",component:goods}
]

var router = new VueRoute({
    routes:routes
})

var app=new Vue({
    el:"#app",
    data:{},
    router:router,
   
})

