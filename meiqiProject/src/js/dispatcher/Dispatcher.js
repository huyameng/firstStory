import HomeStore from "../store/HomeStore.js";
import fetch from "isomorphic-fetch";

var Dispatcher = require("flux").Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.register(function(action){
     switch(action.type){
        case "HOME_ITEM":
    Promise.all(["./json/Homedata2.json","./json/Homedata1.json"].map(url =>
      fetch(url).then(resp => resp.text())
    )).then(texts => {
      var data=JSON.parse(texts[0]);
      var data1=JSON.parse(texts[1])
      console.log(data1)
            HomeStore.addTopList(data.TopList);
             HomeStore.addSwiperList(data.list);
             HomeStore.addHomeList(data1.list)
             HomeStore.updateView();
    });
    break;
    }
});

export default AppDispatcher;