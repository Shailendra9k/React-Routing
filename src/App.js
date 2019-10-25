import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import TodoList from "./component/TodoList";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link> <Link to="/contact">Contact</Link>{" "}
          <Link to="/todolist">TodoList</Link> <Link to="/about">About</Link>{" "}
          <Link to="/links">Links</Link>{" "}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/about" component={About} />
            <Route path="/links" render={() => <h1>Links</h1>} />
            <Route render={() => <h1>Page not found.</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
