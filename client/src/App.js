import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Wrapper from "./components/Wrapper";
import Register from "./pages/Register";
import Main from "./pages/Main";

//Bryan is our master!

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={Register} />
        </Wrapper>
      </div>
    </Router>
  );
}


export default App;
