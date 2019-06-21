import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import login from './login';
import form from './form';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={login} exact />
          <Route path="/form" component={form} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
