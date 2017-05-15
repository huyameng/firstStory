var EventEmitter =require("events").EventEmitter;
var assign =require("object-assign");

var HomeStore=assign({},EventEmitter.prototype,{
    state:{
       TopList:[],
       SwiperList:[],
       HomeList:[]
    },
    getAll:function(){
        return this.state;
    },
    addTopList:function(list){
      this.state.TopList = list;
    },
     addSwiperList:function(text){
      this.state.SwiperList = text;
    },
    addHomeList:function(text){
        
       this.state.HomeList = text;  
    },
    addListener:function(callback){
        this.on("update",callback)
    },
    updateView:function(){
        this.emit("update")
    },
    removeListenerx:function(callback){   
 this.removeListener("update", callback);       
    }
})

export default HomeStore;