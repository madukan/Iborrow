import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";


class App extends React.Component{

    render(){
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        {/* <Route path="" exact component={a}/>
                        <Route path="" exact component={b}/>
                        <Route path="" exact component={v}/>
                        <Route path="" exact component={c}/>
                        <Route path="" exact component={d}/> */}
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;