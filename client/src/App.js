import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Wrapper from "./components/Wrapper";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Login from "./pages/Login"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Wrapper>
        <Footer />
      </div>


    </Router>

  );
}

export default App;
