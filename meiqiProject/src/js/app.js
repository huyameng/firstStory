import {render} from "react-dom";
import {Router,Route,IndexRedirect,hashHistory} from "react-router";
import Main from "./component/PageMain.js";
import Home from "./component/PageHome.js";
import Mine from "./component/PageMine.js";
require("../less/style.less");
var App=React.createClass({
    render:function(){
        return(
            <Router history={hashHistory}>
              
                <Route path="/" component={Main} >
                  <IndexRedirect to="/home"/>
                  <Route path="/home" component={Home}/>
                  <Route path="/mine" component={Mine}/>
                </Route>
            </Router>
        )
    }
});

render(<App />,document.getElementById("app"));