import AppDispathcer from "../dispatcher/Dispatcher.js";

var actions = {
    newsInit : function(){
        //向dispatch发送一个action
        AppDispathcer.dispatch({
            type : "HOME_ITEM"
        })
    }
}

export default actions;