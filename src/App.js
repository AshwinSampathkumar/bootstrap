import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import login from './login';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={login} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
